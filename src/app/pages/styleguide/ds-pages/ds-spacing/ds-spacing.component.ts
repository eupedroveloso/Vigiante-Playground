import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ds-spacing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-spacing.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsSpacingComponent {
  readonly spacings = [
    { token: '--space-0', value: '0px' },
    { token: '--space-4', value: '4px' },
    { token: '--space-8', value: '8px' },
    { token: '--space-12', value: '12px' },
    { token: '--space-16', value: '16px' },
    { token: '--spacing-1-5', value: '6px' },
    { token: '--spacing-2', value: '8px' },
  ];
}
