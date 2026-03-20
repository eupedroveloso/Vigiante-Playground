import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabBarComponent } from '../../../../components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-ds-tab-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabBarComponent],
  templateUrl: './ds-tab-bar.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsTabBarComponent {}
