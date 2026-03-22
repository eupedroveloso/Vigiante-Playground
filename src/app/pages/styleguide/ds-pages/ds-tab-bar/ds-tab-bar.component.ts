import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TabBarComponent } from '../../../../components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-ds-tab-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabBarComponent],
  templateUrl: './ds-tab-bar.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsTabBarComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  goHome(): void {
    void this.router.navigate(['/projetos']);
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
