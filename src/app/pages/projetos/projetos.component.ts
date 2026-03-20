import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContextBarComponent } from '../../components/context-bar/context-bar.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

interface Project {
  name: string;
  imageUrl: string | null;
  layerCount: number;
  locationCount: number;
  editedAt: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContextBarComponent, CardProjectComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  readonly projects: Project[] = [
    {
      name: 'Focos de dengue - Brasília',
      imageUrl: null,
      layerCount: 4,
      locationCount: 324,
      editedAt: '2 dias',
    },
    {
      name: 'RHAMB - DF',
      imageUrl: null,
      layerCount: 42,
      locationCount: 2752,
      editedAt: '8 dias',
    },
    {
      name: 'Cartografia Social Nacional',
      imageUrl: null,
      layerCount: 69,
      locationCount: 325,
      editedAt: '16 dias',
    },
    {
      name: 'Cartografia Terreiros',
      imageUrl: null,
      layerCount: 2,
      locationCount: 2,
      editedAt: '24 dias',
    },
    {
      name: 'Unidades Básica de Saúde - DF',
      imageUrl: null,
      layerCount: 3,
      locationCount: 12,
      editedAt: '2 dias',
    },
    {
      name: 'Contagem das nascentes - Goiás',
      imageUrl: null,
      layerCount: 3,
      locationCount: 56,
      editedAt: '8 dias',
    },
    {
      name: 'Regiões de vulnerabilidade - DF',
      imageUrl: null,
      layerCount: 2,
      locationCount: 6,
      editedAt: '24 dias',
    },
  ];
}
