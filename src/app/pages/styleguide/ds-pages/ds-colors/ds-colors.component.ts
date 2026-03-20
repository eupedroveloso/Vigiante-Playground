import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ds-colors',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-colors.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsColorsComponent {
  readonly colors = [
    { token: '--theme-background-brand', value: '#a001a8', label: 'background/brand' },
    { token: '--theme-background-elevated', value: '#ffffff', label: 'background/elevated' },
    { token: '--theme-border-primary', value: '#ededed', label: 'border/primary' },
    { token: '--theme-text-primary', value: '#0d0d0d', label: 'text/primary' },
    { token: '--theme-text-tertiary', value: '#767070', label: 'text/tertiary' },
    { token: '--theme-text-inverse', value: '#f8f8f8', label: 'text/inverse' },
    { token: '--theme-text-disabled', value: '#a8a4a4', label: 'text/disabled' },
    { token: '--theme-background-page', value: '#f8f8f8', label: 'background/page' },
  ];
}
