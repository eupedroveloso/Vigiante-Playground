import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ds-effects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-effects.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsEffectsComponent {
  readonly shadows = [
    { token: '--shadow-xs', value: '0px 1px 2px 0px rgba(0,0,0,0.05)', label: 'shadow/xs' },
  ];
}
