import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContextBarComponent } from '../../../../components/context-bar/context-bar.component';

@Component({
  selector: 'app-ds-context-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContextBarComponent],
  templateUrl: './ds-context-bar.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsContextBarComponent {}
