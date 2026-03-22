import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContextBarComponent } from '../../components/context-bar/context-bar.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ProjectsService } from '../../core/projects.service';

@Component({
  selector: 'app-projetos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContextBarComponent, CardProjectComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  private readonly router = inject(Router);
  private readonly projectsService = inject(ProjectsService);

  readonly projects = this.projectsService.projects;

  goToCriarProjeto(): void {
    void this.router.navigate(['/criar-projeto']);
  }

  duplicateProject(id: string): void {
    this.projectsService.duplicate(id);
  }

  deleteProject(id: string): void {
    this.projectsService.delete(id);
  }
}
