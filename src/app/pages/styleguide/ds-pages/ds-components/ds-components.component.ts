import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardProjectComponent } from '../../../../components/card-project/card-project.component';
import { ContextBarComponent } from '../../../../components/context-bar/context-bar.component';

@Component({
  selector: 'app-ds-components',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardProjectComponent, ContextBarComponent],
  templateUrl: './ds-components.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsComponentsComponent {}
