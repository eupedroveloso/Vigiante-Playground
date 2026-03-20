import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-ds-breadcrumb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BreadcrumbComponent],
  templateUrl: './ds-breadcrumb.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsBreadcrumbComponent {}
