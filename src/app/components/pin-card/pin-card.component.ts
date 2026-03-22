import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MapPin } from '../../shared/map/map.component';

// Figma node: 2143:12523 — pin inspection card
// Asset URLs fetched 2026-03-22 (expire ~7 days)
const ICON_XMARK = 'https://www.figma.com/api/mcp/asset/6b660e3b-fb3f-4455-9354-b0174bb80592';

@Component({
  selector: 'app-pin-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pin-card.component.html',
  styleUrl: './pin-card.component.scss',
})
export class PinCardComponent {
  readonly pin = input.required<MapPin>();
  readonly close = output<void>();
  readonly editRecord = output<MapPin>();

  readonly iconXmark = ICON_XMARK;
}
