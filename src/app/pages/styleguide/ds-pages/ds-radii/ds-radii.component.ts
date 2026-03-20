import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ds-radii',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-radii.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsRadiiComponent {
  readonly radii = [
    { token: '--radius-0', value: '0px' },
    { token: '--radius-md', value: '8px' },
  ];
}
