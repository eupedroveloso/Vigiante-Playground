import { ChangeDetectionStrategy, Component, output } from '@angular/core';

/**
 * MenuDropdown — Figma node: 2066:1402
 *
 * Dropdown menu shown when clicking the ellipsis (⋯) button on a Card Project.
 * Items: Editar Projeto, Duplicar, (separator), Excluir (with trash icon).
 */
@Component({
  selector: 'app-menu-dropdown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.scss',
})
export class MenuDropdownComponent {
  readonly edit = output<void>();
  readonly duplicate = output<void>();
  readonly delete = output<void>();
}
