import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabBarComponent, TabBarItem } from '../../components/tab-bar/tab-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../components/breadcrumb/breadcrumb.component';
import { MapComponent, MapPin } from '../../shared/map/map.component';

// Figma node: 2493:21536 — desktop-project-forms/actions
// Asset URLs fetched 2026-03-19 (expire ~7 days)
const ICON_BARS           = 'https://www.figma.com/api/mcp/asset/b866ff66-6fdb-4802-8671-6d0804fe35b3';
const ICON_MAP_DARK       = 'https://www.figma.com/api/mcp/asset/b0e039b2-f434-4216-9aad-7de596ba02e5';
const ICON_LIST_LIGHT     = 'https://www.figma.com/api/mcp/asset/8176064f-cfa3-4d73-bd41-95279da90be3';
const ICON_LOCATION_DOT   = 'https://www.figma.com/api/mcp/asset/cf6af3da-5f2b-415b-93d4-c00592c5844c';
const ICON_SEARCH         = 'https://www.figma.com/api/mcp/asset/e42c2e5f-143f-4361-9aa0-b64ac5737762';
const ICON_BELL           = 'https://www.figma.com/api/mcp/asset/d58ac3a4-ce56-4622-8622-51fe4039938b';
const ICON_ELLIPSIS       = 'https://www.figma.com/api/mcp/asset/194fed13-3113-452a-8106-8a04d47d539c';
const ICON_SIDEBAR_TOGGLE = 'https://www.figma.com/api/mcp/asset/1a74abcb-7b8b-4ad5-bcd2-1bc9be5eb8c0';

export interface FormRow {
  name: string;
  records: number;
}

@Component({
  selector: 'app-projeto-forms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabBarComponent, BreadcrumbComponent, MapComponent],
  templateUrl: './projeto-forms.component.html',
  styleUrl: './projeto-forms.component.scss',
})
export class ProjetoFormsComponent {
  readonly tabs: TabBarItem[] = [
    { label: 'Projeto' },
    { label: 'Projeto' },
    { label: 'Projeto' },
  ];

  readonly breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Início' },
    { label: 'Projetos' },
    { label: 'Focos de Dengue' },
  ];

  readonly forms: FormRow[] = [
    { name: 'Focos de Dengue - Brasília', records: 84 },
    { name: 'Regiões de Vulnerabilidade - Brasília', records: 31 },
    { name: 'Apoiadores - Pesquisadores Sociais', records: 2 },
    { name: 'Equipamentos públicos', records: 99 },
    { name: 'Mapeamento de Focos em expansão', records: 0 },
    { name: 'Mapeamento de Acesso a UBS - Brasília', records: 56 },
    { name: 'ONGS de acesso a comunidades carentes - Centro', records: 12 },
    { name: 'Unidades Fiocruz Brasil', records: 9 },
    { name: 'Campanhas de Conscientização - Brasília', records: 45 },
    { name: 'Parcerias com Escolas - Brasília', records: 28 },
    { name: 'Relatórios de Monitoramento - Focos de Dengue', records: 73 },
    { name: 'Dados Estatísticos - Últimos 5 Anos', records: 67 },
    { name: 'Dados Brutos - Últimos 5 Anos', records: 23 },
  ];

  // Map configuration — centered on Lago Paranoá, Brasília
  readonly mapCenter: [number, number] = [-15.77, -47.87];
  readonly mapZoom = 14;
  readonly mapPins: MapPin[] = [
    { lat: -15.745, lng: -47.855 },
    { lat: -15.775, lng: -47.840 },
    { lat: -15.800, lng: -47.870 },
    { lat: -15.758, lng: -47.895 },
    { lat: -15.820, lng: -47.855 },
    { lat: -15.732, lng: -47.878 },
    { lat: -15.788, lng: -47.910 },
    { lat: -15.810, lng: -47.832 },
  ];

  readonly panelExpanded = signal(true);

  togglePanel(): void {
    this.panelExpanded.update((v) => !v);
  }

  readonly iconBars = ICON_BARS;
  readonly iconMapDark = ICON_MAP_DARK;
  readonly iconListLight = ICON_LIST_LIGHT;
  readonly iconLocationDot = ICON_LOCATION_DOT;
  readonly iconSearch = ICON_SEARCH;
  readonly iconBell = ICON_BELL;
  readonly iconEllipsis = ICON_ELLIPSIS;
  readonly iconSidebarToggle = ICON_SIDEBAR_TOGGLE;
}
