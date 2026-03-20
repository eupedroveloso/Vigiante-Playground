import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';

export type NavItem =
  | { type: 'link'; path: string; label: string }
  | { type: 'group'; label: string; children: { path: string; label: string }[] };

@Component({
  selector: 'app-styleguide',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.scss',
})
export class StyleguideComponent {
  readonly navItems: NavItem[] = [
    { type: 'link', path: 'colors', label: 'Colors' },
    { type: 'link', path: 'typography', label: 'Typography' },
    { type: 'link', path: 'spacing', label: 'Space' },
    { type: 'link', path: 'radii', label: 'Radii' },
    { type: 'link', path: 'effects', label: 'Effects' },
    { type: 'link', path: 'icons', label: 'Icons' },
    {
      type: 'group',
      label: 'Components',
      children: [
        { path: 'components/card-project', label: 'Card Project' },
        { path: 'components/context-bar', label: 'Context Bar' },
        { path: 'components/breadcrumb', label: 'Breadcrumb' },
        { path: 'components/tab-bar', label: 'Tab Bar' },
      ],
    },
    {
      type: 'group',
      label: 'Ferramenta',
      children: [
        { path: '/projetos', label: 'Projetos' },
        { path: '/projeto-forms', label: 'Formulários' },
      ],
    },
  ];
}
