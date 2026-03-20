import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ds-typography',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-typography.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsTypographyComponent {
  readonly typography = [
    { name: 'Body/sm', family: 'Albert Sans', weight: '400 (Regular)', size: '14px', lineHeight: '18px' },
    { name: 'Body Strong/sm', family: 'Albert Sans', weight: '600 (SemiBold)', size: '14px', lineHeight: '18px' },
    { name: 'text-xs/leading-none', family: 'Geist', weight: '400 (Regular)', size: '12px', lineHeight: '1' },
  ];
}
