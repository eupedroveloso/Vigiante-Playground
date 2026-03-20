import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * CardProject — Vigiante V2
 * Figma node: 2045:1762
 *
 * Os ícones ellipsis (2006:674), list (2006:764) e location-dot (2006:672)
 * são retornados pelo Figma MCP como assets de imagem posicionados.
 * O layout de posicionamento (inset) segue exatamente o que o Figma gerou.
 *
 * Figma asset URLs:
 *   ellipsis:      node 2045:1721 → Primary node I2045:1721;2006:674
 *   list:          node 2045:1846 → Primary node I2045:1846;2006:764
 *   location-dot:  node 2045:1859 → Primary node I2045:1859;2006:672
 */
@Component({
  selector: 'app-card-project',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  readonly name = input.required<string>();
  readonly imageUrl = input<string | null>(null);
  readonly layerCount = input<number>(0);
  readonly locationCount = input<number>(0);
  readonly editedAt = input<string>('');
}
