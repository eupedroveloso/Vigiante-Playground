import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardProjectComponent } from '../../../../components/card-project/card-project.component';

@Component({
  selector: 'app-ds-card-project',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardProjectComponent],
  templateUrl: './ds-card-project.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsCardProjectComponent {}
