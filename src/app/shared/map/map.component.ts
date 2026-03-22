import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import maplibregl from 'maplibre-gl';
import type { GeoJSONSource, MapGeoJSONFeature } from 'maplibre-gl';

export interface MapPin {
  id?: string;
  lat: number;
  lng: number;
  avatarUrl?: string;
}

export interface PinClickEvent {
  pin: MapPin;
  /** Pixel x relative to the map container */
  x: number;
  /** Pixel y relative to the map container */
  y: number;
}

const DEFAULT_AVATAR  = 'https://www.figma.com/api/mcp/asset/9d5e2b1d-e890-4747-810e-481b6b24a5a1';
// Cluster pin avatar — Figma node 2037:618 | asset expires ~7 days
const CLUSTER_AVATAR  = 'https://www.figma.com/api/mcp/asset/228d3eaa-a4e3-476a-acff-a843421de1c6';

const SOURCE_ID = 'map-pins';

@Component({
  selector: 'app-map',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #mapEl class="map-root"></div>`,
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl') private mapEl!: ElementRef<HTMLDivElement>;

  readonly center      = input<[number, number]>([-15.77, -47.87]);
  readonly zoom        = input<number>(14);
  readonly pins        = input<MapPin[]>([]);
  readonly selectedPin = input<MapPin | null>(null);
  readonly pinClick    = output<PinClickEvent>();

  private readonly zone = inject(NgZone);

  private map: maplibregl.Map | null = null;
  private markerMap        = new Map<string, maplibregl.Marker>();
  private clusterMarkerMap = new Map<string, maplibregl.Marker>();
  private mapLoaded = false;

  constructor() {
    effect(() => {
      const pins = this.pins();
      if (this.map && this.mapLoaded) {
        this.updateSource(pins);
      }
    });

    effect(() => {
      const selected = this.selectedPin();
      this.updateSelectionStyles(selected);
    });
  }

  ngAfterViewInit(): void {
    const [lat, lng] = this.center();
    this.map = new maplibregl.Map({
      container: this.mapEl.nativeElement,
      style: '/map-style.json',
      center: [lng, lat],
      zoom: this.zoom(),
      pitch: 45,
      maxPitch: 85,
    });

    // Custom zoom controls are rendered in the parent floating panel — no built-in NavigationControl.

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
    this.markerMap.clear();
    this.clusterMarkerMap.clear();
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  locateUser(): void {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      this.map?.flyTo({
        center: [pos.coords.longitude, pos.coords.latitude],
        zoom: 15,
      });
    });
  }

  // ─── Private ─────────────────────────────────────────────────────────────

  private initClusterLayers(): void {
    // GeoJSON source with clustering enabled — cluster HTML markers are
    // rendered in syncMarkers() instead of using GL circle/symbol layers.
    this.map!.addSource(SOURCE_ID, {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
      cluster: true,
      clusterMaxZoom: 13,
      clusterRadius: 50,
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
          id: pin.id ?? '',
          avatarUrl: pin.avatarUrl ?? DEFAULT_AVATAR,
        },
      })),
    });
  }

  /** Called on every render frame — adds/removes HTML markers for pins and clusters. */
  private syncMarkers(): void {
    if (!this.map || !this.mapLoaded) return;

    // ── Individual (unclustered) pins ────────────────────────────────────────
    const pinFeatures = this.map.querySourceFeatures(SOURCE_ID, {
      filter: ['!', ['has', 'point_count']],
    }) as MapGeoJSONFeature[];

    const visiblePins = new Map<string, { id: string; lng: number; lat: number; avatarUrl: string }>();
    for (const f of pinFeatures) {
      const coords = (f.geometry as { coordinates: number[] }).coordinates;
      const key = `${coords[1]},${coords[0]}`;
      if (!visiblePins.has(key)) {
        visiblePins.set(key, {
          id: (f.properties?.['id'] as string) ?? '',
          lng: coords[0],
          lat: coords[1],
          avatarUrl: (f.properties?.['avatarUrl'] as string) ?? DEFAULT_AVATAR,
        });
      }
    }

    for (const [key, marker] of this.markerMap) {
      if (!visiblePins.has(key)) { marker.remove(); this.markerMap.delete(key); }
    }
    for (const [key, { id, lng, lat, avatarUrl }] of visiblePins) {
      if (!this.markerMap.has(key)) {
        const el = this.createPinEl(id, lng, lat, avatarUrl);
        const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([lng, lat]).addTo(this.map!);
        this.markerMap.set(key, marker);
      }
    }

    // ── Cluster pins ─────────────────────────────────────────────────────────
    const clusterFeatures = this.map.querySourceFeatures(SOURCE_ID, {
      filter: ['has', 'point_count'],
    }) as MapGeoJSONFeature[];

    const visibleClusters = new Map<string, { lng: number; lat: number; count: number }>();
    for (const f of clusterFeatures) {
      const coords = (f.geometry as { coordinates: number[] }).coordinates;
      const key = `${coords[1]},${coords[0]}`;
      if (!visibleClusters.has(key)) {
        visibleClusters.set(key, {
          lng: coords[0],
          lat: coords[1],
          count: (f.properties?.['point_count'] as number) ?? 0,
        });
      }
    }

    for (const [key, marker] of this.clusterMarkerMap) {
      if (!visibleClusters.has(key)) { marker.remove(); this.clusterMarkerMap.delete(key); }
    }
    for (const [key, { lng, lat, count }] of visibleClusters) {
      if (!this.clusterMarkerMap.has(key)) {
        const el = this.createClusterEl(count);
        const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([lng, lat]).addTo(this.map!);
        this.clusterMarkerMap.set(key, marker);
      }
    }
  }

  private createPinEl(id: string, lng: number, lat: number, avatarUrl: string): HTMLElement {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="map-pin">
        <div class="map-pin__circle">
          <div class="map-pin__avatar">
            <img src="${avatarUrl}" alt="">
          </div>
        </div>
      </div>`;
    el.addEventListener('click', () => {
      const point = this.map!.project([lng, lat]);
      this.zone.run(() => this.pinClick.emit({ pin: { id, lat, lng, avatarUrl }, x: point.x, y: point.y }));
    });
    return el;
  }

  private updateSelectionStyles(selected: MapPin | null): void {
    if (!this.mapEl) return;
    this.mapEl.nativeElement.classList.toggle('map-has-selection', !!selected);

    const selectedKey = selected ? `${selected.lat},${selected.lng}` : null;
    for (const [key, marker] of this.markerMap) {
      marker.getElement().querySelector('.map-pin')
        ?.classList.toggle('map-pin--selected', key === selectedKey);
    }
  }

  private createClusterEl(count: number): HTMLElement {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="map-pin">
        <div class="map-pin__circle">
          <div class="map-pin__avatar">
            <img src="${CLUSTER_AVATAR}" alt="">
          </div>
          <div class="map-cluster__badge">${count}</div>
        </div>
      </div>`;
    return el;
  }
}
