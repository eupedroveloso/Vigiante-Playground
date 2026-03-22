import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuDropdownComponent } from '../../../../components/menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'app-ds-menu-dropdown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MenuDropdownComponent],
  templateUrl: './ds-menu-dropdown.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsMenuDropdownComponent {}
