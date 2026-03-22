import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  input,
} from '@angular/core';
import maplibregl from 'maplibre-gl';
import type { MapPin } from '../../shared/map/map.component';

/**
 * MapThumbnail — non-interactive mini-map for Card Project thumbnails.
 * Renders a static snapshot of the map at the given center/zoom with optional pins.
 */
@Component({
  selector: 'app-map-thumbnail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #mapEl class="map-thumb"></div>`,
  styleUrl: './map-thumbnail.component.scss',
})
export class MapThumbnailComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl') private mapEl!: ElementRef<HTMLDivElement>;

  readonly center = input<[number, number]>([-15.77, -47.87]);
  readonly zoom = input<number>(12);
  readonly pins = input<MapPin[]>([]);

  private map: maplibregl.Map | null = null;

  ngAfterViewInit(): void {
    const [lat, lng] = this.center();
    this.map = new maplibregl.Map({
      container: this.mapEl.nativeElement,
      style: '/map-style.json',
      center: [lng, lat],
      zoom: this.zoom(),
      interactive: false,
      attributionControl: false,
    });

    this.map.on('load', () => this.addPins());
  }

  ngOnDestroy(): void {
    this.map?.remove();
    this.map = null;
  }

  private addPins(): void {
    const pins = this.pins();
    if (!pins.length || !this.map) return;

    this.map.addSource('thumb-pins', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: pins.map((pin) => ({
          type: 'Feature' as const,
          geometry: { type: 'Point' as const, coordinates: [pin.lng, pin.lat] },
          properties: {},
        })),
      },
    });

    this.map.addLayer({
      id: 'thumb-pin-circles',
      type: 'circle',
      source: 'thumb-pins',
      paint: {
        'circle-color': '#a001a8',
        'circle-radius': 5,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    });
  }
}
