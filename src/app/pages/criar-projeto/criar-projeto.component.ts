import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { ProjectsService } from '../../core/projects.service';
import type { ProjectUser, ProjectFile } from '../../core/projects.service';

// Figma nodes:
// 2203:13680 — desktop-criar-projeto        (Dados tab)
// 2214:7732  — desktop-criar-projeto-Usuários (empty state)
// 2214:15822 — desktop-criar-projeto-Usuários-importado (with users)
// 2214:8107  — desktop-criar-projeto-Arquivos
// Asset URLs fetched 2026-03-22 (expire ~7 days)

// Logo — Figma node I2203:13681;2045:1044
const ICON_LOGO_TOP      = 'https://www.figma.com/api/mcp/asset/d840de42-377c-4260-bad9-a199f1e6c787';
const ICON_LOGO_BOTTOM   = 'https://www.figma.com/api/mcp/asset/04ce92c1-6d17-4fda-9908-7152b5f35812';
// Bell — Figma node I2203:13681;2050:1095 | inset[10%_15%]
const ICON_BELL          = 'https://www.figma.com/api/mcp/asset/4549627a-2f9b-4084-97ef-605737cbcae9';
// Chevron-right — Figma node 2009:392 | inset[28.94%_35.78%_27.32%_40%]
const ICON_CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/b92936a4-15fc-44cb-ad53-3e88a6293f6e';
// Plus — Figma node I2214:8020;2007:1185 | inset[15%] — add user
const ICON_PLUS          = 'https://www.figma.com/api/mcp/asset/95f4e433-7bcf-412d-9264-2b507dfc9b93';
// Trash — Figma node I2214:16133;2007:1185 | inset[7.5%_15%_10%_15%] — remove user
const ICON_TRASH         = 'https://www.figma.com/api/mcp/asset/19713376-15db-49ed-a811-94b8c61538c6';
// Ellipsis — Figma node I2214:8740;2007:1185 | inset[45%_15%] — file actions
const ICON_ELLIPSIS      = 'https://www.figma.com/api/mcp/asset/ba960d07-8183-4fe4-89e0-c637b84b6790';

export type { ProjectUser, ProjectFile };

@Component({
  selector: 'app-criar-projeto',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatusBadgeComponent],
  templateUrl: './criar-projeto.component.html',
  styleUrl: './criar-projeto.component.scss',
})
export class CriarProjetoComponent {
  private readonly router = inject(Router);
  private readonly projectsService = inject(ProjectsService);

  // Active tab
  readonly activeTab = signal<'dados' | 'usuarios' | 'arquivos'>('dados');

  // ── Form fields ────────────────────────────────────────────────────────────

  readonly nome       = signal('');
  readonly alias      = signal('');
  readonly descricao  = signal('');
  readonly endereco   = signal('');
  readonly urlExterna = signal('');

  // ── Usuários ──────────────────────────────────────────────────────────────

  readonly projectUsers = signal<ProjectUser[]>([]);

  // System user pool (empty — no fictional data)
  readonly allImportableUsers: ProjectUser[] = [];

  readonly filteredImportResults = computed(() =>
    this.allImportableUsers.filter(
      u => !this.projectUsers().some(p => p.email === u.email)
    )
  );

  addUser(user: ProjectUser): void {
    this.projectUsers.update(list => [...list, user]);
  }

  removeUser(user: ProjectUser): void {
    this.projectUsers.update(list => list.filter(u => u.email !== user.email));
  }

  // ── Arquivos ──────────────────────────────────────────────────────────────

  readonly projectFiles = signal<ProjectFile[]>([]);

  // ── Actions ───────────────────────────────────────────────────────────────

  criar(): void {
    const name = this.nome().trim();
    if (!name) return;
    this.projectsService.create({
      name,
      alias:       this.alias().trim(),
      description: this.descricao().trim(),
      address:     this.endereco().trim(),
      externalUrl: this.urlExterna().trim(),
      users:       this.projectUsers(),
      files:       this.projectFiles(),
    });
    void this.router.navigate(['/projetos']);
  }

  cancel(): void {
    void this.router.navigate(['/projetos']);
  }

  // ── Icons ─────────────────────────────────────────────────────────────────

  readonly iconLogoTop      = ICON_LOGO_TOP;
  readonly iconLogoBottom   = ICON_LOGO_BOTTOM;
  readonly iconBell         = ICON_BELL;
  readonly iconChevronRight = ICON_CHEVRON_RIGHT;
  readonly iconPlus         = ICON_PLUS;
  readonly iconTrash        = ICON_TRASH;
  readonly iconEllipsis     = ICON_ELLIPSIS;
}
