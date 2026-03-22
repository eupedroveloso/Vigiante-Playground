import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PinCardComponent } from '../../../../components/pin-card/pin-card.component';
import { MapPin } from '../../../../shared/map/map.component';

@Component({
  selector: 'app-ds-pin-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PinCardComponent],
  templateUrl: './ds-pin-card.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsPinCardComponent {
  readonly samplePin: MapPin = {
    id: '#0rtc4322',
    lat: -15.745,
    lng: -47.855,
  };

  readonly visible = signal(true);

  show(): void { this.visible.set(true); }
}
