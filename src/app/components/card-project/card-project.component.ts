import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { MapThumbnailComponent } from '../map-thumbnail/map-thumbnail.component';
import { MenuDropdownComponent } from '../menu-dropdown/menu-dropdown.component';
import type { MapPin } from '../../shared/map/map.component';

/**
 * CardProject — Figma node: 2045:1762 / 2060:817
 *
 * Ellipsis menu: node 2066:1402 (menu-dropdown)
 * Clicking the card navigates to /projeto-forms.
 * Thumbnail shows a non-interactive mini-map with pins.
 */
@Component({
  selector: 'app-card-project',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapThumbnailComponent, MenuDropdownComponent],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  readonly projectId = input.required<string>();
  readonly name = input.required<string>();
  readonly layerCount = input<number>(0);
  readonly locationCount = input<number>(0);
  readonly editedAt = input<string>('');
  readonly center = input<[number, number]>([-15.77, -47.87]);
  readonly zoom = input<number>(12);
  readonly pins = input<MapPin[]>([]);

  readonly duplicateProject = output<string>();
  readonly deleteProject = output<string>();

  readonly menuOpen = signal(false);

  constructor(private router: Router) {}

  openMenu(event: Event): void {
    event.stopPropagation();
    this.menuOpen.set(!this.menuOpen());
  }

  @HostListener('document:click')
  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }

  onDuplicate(): void {
    this.menuOpen.set(false);
    this.duplicateProject.emit(this.projectId());
  }

  onDelete(): void {
    this.menuOpen.set(false);
    this.deleteProject.emit(this.projectId());
  }

  navigateToProject(): void {
    this.router.navigate(['/projeto-forms']);
  }
}
