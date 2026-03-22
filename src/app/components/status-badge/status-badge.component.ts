import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Figma node: 2214:8054 (Ativo) | 2214:8101 (Desativado)

@Component({
  selector: 'app-status-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="status-badge"
      [class.status-badge--ativo]="status() === 'ativo'"
      [class.status-badge--desativado]="status() === 'desativado'"
    >{{ status() === 'ativo' ? 'Ativo' : 'Desativado' }}</span>
  `,
  styleUrl: './status-badge.component.scss',
})
export class StatusBadgeComponent {
  readonly status = input.required<'ativo' | 'desativado'>();
}
