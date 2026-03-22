import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

export interface BreadcrumbItem {
  label: string;
}

/**
 * ContextBar — Vigiante V2
 * Figma node: 2560:13516
 *
 * Top navigation bar with logo, nav label, search, action button,
 * icon buttons, and breadcrumb row.
 */
@Component({
  selector: 'app-context-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './context-bar.component.html',
  styleUrl: './context-bar.component.scss',
})
export class ContextBarComponent {
  readonly pageTitle = input('Projetos');
  readonly breadcrumb = input<BreadcrumbItem[]>([
    { label: 'Início' },
    { label: 'Projetos' },
  ]);
  readonly criarProjeto = output<void>();
}
