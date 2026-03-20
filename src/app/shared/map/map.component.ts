import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  effect,
  input,
} from '@angular/core';
import maplibregl from 'maplibre-gl';
import type { GeoJSONSource, MapGeoJSONFeature } from 'maplibre-gl';

export interface MapPin {
  lat: number;
  lng: number;
  avatarUrl?: string;
}

const DEFAULT_AVATAR = 'https://www.figma.com/api/mcp/asset/9d5e2b1d-e890-4747-810e-481b6b24a5a1';

const SOURCE_ID      = 'map-pins';
const LAYER_CLUSTERS = 'map-clusters';
const LAYER_COUNT    = 'map-cluster-count';

@Component({
  selector: 'app-map',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #mapEl class="map-root"></div>`,
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl') private mapEl!: ElementRef<HTMLDivElement>;

  readonly center = input<[number, number]>([-15.77, -47.87]);
  readonly zoom   = input<number>(14);
  readonly pins   = input<MapPin[]>([]);

  private map: maplibregl.Map | null = null;
  private markerMap = new Map<string, maplibregl.Marker>();
  private mapLoaded = false;

  constructor() {
    effect(() => {
      const pins = this.pins();
      if (this.map && this.mapLoaded) {
        this.updateSource(pins);
      }
    });
  }

  ngAfterViewInit(): void {
    const [lat, lng] = this.center();
    this.map = new maplibregl.Map({
      container: this.mapEl.nativeElement,
      style: '/map-style.json',
      center: [lng, lat],
      zoom: this.zoom(),
    });

    this.map.addControl(new maplibregl.NavigationControl(), 'bottom-right');

    this.map.on('load', () => {
      this.mapLoaded = true;
      this.initClusterLayers();
      this.updateSource(this.pins());
    });

    // Sync unclustered HTML markers after each render frame
    this.map.on('render', () => this.syncMarkers());
  }

  ngOnDestroy(): void {
    this.map?.remove();
    this.map = null;
  }

  // ─── Private ─────────────────────────────────────────────────────────────

  private initClusterLayers(): void {
    this.map!.addSource(SOURCE_ID, {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
      cluster: true,
      clusterMaxZoom: 13,
      clusterRadius: 50,
    });

    // Cluster bubble
    this.map!.addLayer({
      id: LAYER_CLUSTERS,
      type: 'circle',
      source: SOURCE_ID,
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': '#a001a8',
        // grows from 24px → 32px → 40px as count increases
        'circle-radius': ['step', ['get', 'point_count'], 24, 10, 32, 50, 40],
        'circle-stroke-width': 4,
        'circle-stroke-color': 'rgba(160,1,168,0.25)',
      },
    });

    // Count label inside cluster bubble
    this.map!.addLayer({
      id: LAYER_COUNT,
      type: 'symbol',
      source: SOURCE_ID,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-size': 13,
      },
      paint: {
        'text-color': '#ffffff',
      },
    });
  }

  private updateSource(pins: MapPin[]): void {
    const source = this.map!.getSource(SOURCE_ID) as GeoJSONSource;
    source.setData({
      type: 'FeatureCollection',
      features: pins.map((pin) => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [pin.lng, pin.lat],
        },
        properties: {
          avatarUrl: pin.avatarUrl ?? DEFAULT_AVATAR,
        },
      })),
    });
  }

  /** Called on every render frame — adds/removes HTML markers for unclustered points. */
  private syncMarkers(): void {
    if (!this.map || !this.mapLoaded) return;

    const features = this.map.querySourceFeatures(SOURCE_ID, {
      filter: ['!', ['has', 'point_count']],
    }) as MapGeoJSONFeature[];

    // Deduplicate (same feature can appear in multiple tiles)
    const visible = new Map<string, { lng: number; lat: number; avatarUrl: string }>();
    for (const f of features) {
      const coords = (f.geometry as { coordinates: number[] }).coordinates;
      const key = `${coords[1]},${coords[0]}`;
      if (!visible.has(key)) {
        visible.set(key, {
          lng: coords[0],
          lat: coords[1],
          avatarUrl: (f.properties?.['avatarUrl'] as string) ?? DEFAULT_AVATAR,
        });
      }
    }

    // Remove markers that are now clustered or off-screen
    for (const [key, marker] of this.markerMap) {
      if (!visible.has(key)) {
        marker.remove();
        this.markerMap.delete(key);
      }
    }

    // Add markers for newly visible unclustered points
    for (const [key, { lng, lat, avatarUrl }] of visible) {
      if (!this.markerMap.has(key)) {
        const el = document.createElement('div');
        el.innerHTML = `
          <div class="map-pin">
            <div class="map-pin__circle">
              <div class="map-pin__avatar">
                <img src="${avatarUrl}" alt="">
              </div>
            </div>
          </div>`;
        const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([lng, lat])
          .addTo(this.map!);
        this.markerMap.set(key, marker);
      }
    }
  }
}
