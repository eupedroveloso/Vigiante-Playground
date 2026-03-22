import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TabBarComponent, TabBarItem } from '../../components/tab-bar/tab-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../components/breadcrumb/breadcrumb.component';
import { MapComponent, MapPin, PinClickEvent } from '../../shared/map/map.component';
import { PinCardComponent } from '../../components/pin-card/pin-card.component';

// Figma nodes: 2163:4586 (map) + 2163:4618 (forms list)
// Asset URLs fetched 2026-03-22 (expire ~7 days)
const ICON_BARS              = 'https://www.figma.com/api/mcp/asset/0678fc69-024d-4c31-aec2-ad742e442fa3';
const ICON_MAP_ACTIVE        = 'https://www.figma.com/api/mcp/asset/be699156-189e-4dc3-bfa0-4f7b2dd865c6';
const ICON_LIST              = 'https://www.figma.com/api/mcp/asset/021d90a7-8a00-4cde-8aea-9e9e1ffd63fc';
const ICON_CHEVRON_DOWN      = 'https://www.figma.com/api/mcp/asset/ec75786a-5cc9-4f28-ae5f-03c45101ebe1';
const ICON_LOCATION_DOT      = 'https://www.figma.com/api/mcp/asset/a0b8fd4c-7580-4370-bfdb-24ee0d7bce07';
const ICON_BELL              = 'https://www.figma.com/api/mcp/asset/8f65603d-c087-486d-b0ab-cffab0eb9990';
const ICON_CROSSHAIRS        = 'https://www.figma.com/api/mcp/asset/ef0343cb-d316-4aff-81f7-ca2385c97058';
const ICON_PLUS              = 'https://www.figma.com/api/mcp/asset/0022d14b-552e-4d75-8336-a5cf2d749e38';
const ICON_MINUS             = 'https://www.figma.com/api/mcp/asset/57bea9da-22f6-49b6-ae1b-8b49f39f8d54';
const ICON_STREET_VIEW       = 'https://www.figma.com/api/mcp/asset/d6ad1b34-33b9-4f52-bca8-0d118558199c';
// ellipsis: Figma node I2163:4772;2007:1185;2006:674 | inset[45%_15%] inside 16×16
const ICON_ELLIPSIS          = 'https://www.figma.com/api/mcp/asset/56941910-4a97-480e-ba8d-db288e351aad';

export interface FormRow {
  name: string;
  records: number;
}

@Component({
  selector: 'app-projeto-forms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabBarComponent, BreadcrumbComponent, MapComponent, PinCardComponent],
  templateUrl: './projeto-forms.component.html',
  styleUrl: './projeto-forms.component.scss',
})
export class ProjetoFormsComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly tabs: TabBarItem[] = [
    { label: 'Projeto' },
    { label: 'Projeto' },
    { label: 'Projeto' },
  ];

  // Breadcrumb: Figma node I2163:4617;2066:2800 — Início > Projetos > Focos de Dengue
  readonly breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Início' },
    { label: 'Projetos' },
    { label: 'Focos de Dengue' },
  ];

  // Map — centered on Lago Paranoá, Brasília
  readonly mapCenter: [number, number] = [-15.77, -47.87];
  readonly mapZoom = 14;
  readonly mapPins: MapPin[] = [
    { id: '#0rtc4322', lat: -15.745, lng: -47.855 },
    { id: '#7wr6hu8',  lat: -15.775, lng: -47.840 },
    { id: '#3idj9k5',  lat: -15.800, lng: -47.870 },
    { id: '#a4s8jf1',  lat: -15.758, lng: -47.895 },
    { id: '#b9l2mqs',  lat: -15.820, lng: -47.855 },
    { id: '#z8r9tq3',  lat: -15.732, lng: -47.878 },
    { id: '#k5y2jv6',  lat: -15.788, lng: -47.910 },
    { id: '#m1o4wq7',  lat: -15.810, lng: -47.832 },
  ];

  @ViewChild(MapComponent) private mapRef!: MapComponent;

  // View mode toggle — map (node 2163:4586) | list / forms (node 2163:4618)
  readonly viewMode = signal<'map' | 'list'>('map');

  setView(mode: 'map' | 'list'): void {
    this.viewMode.set(mode);
  }

  // Forms table data — Figma node 2163:4618
  readonly forms: FormRow[] = [
    { name: 'Focos de Dengue - Brasília',                    records: 84 },
    { name: 'Regiões de Vulnerabilidade - Brasília',         records: 31 },
    { name: 'Apoiadores - Pesquisadores Sociais',            records: 2  },
    { name: 'Equipamentos públicos',                         records: 99 },
    { name: 'Mapeamento de Focos em expansão',               records: 0  },
    { name: 'Mapeamento de Acesso a UBS - Brasília',         records: 56 },
    { name: 'ONGS de acesso a comunidades carentes - Centro',records: 12 },
    { name: 'Unidades Fiocruz Brasil',                       records: 9  },
    { name: 'Campanhas de Conscientização - Brasília',       records: 45 },
    { name: 'Parcerias com Escolas - Brasília',              records: 28 },
    { name: 'Relatórios de Monitoramento - Focos de Dengue', records: 73 },
    { name: 'Dados Estatísticos - Últimos 5 Anos',           records: 67 },
    { name: 'Dados Brutos - Últimos 5 Anos',                 records: 23 },
  ];

  readonly currentPage = signal(1);
  readonly totalPages = [1, 2, 3];

  readonly selectedPin = signal<MapPin | null>(null);
  readonly pinCardX    = signal(0);
  readonly pinCardY    = signal(0);

  onPinClick(event: PinClickEvent): void {
    this.selectedPin.set(event.pin);
    this.pinCardX.set(event.x);
    this.pinCardY.set(event.y);
  }

  onPinCardClose(): void {
    this.selectedPin.set(null);
  }

  onEditRecord(pin: MapPin): void {
    void this.router.navigate(['/projeto-forms']);
  }

  goHome(): void {
    void this.router.navigate(['/projetos']);
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }

  zoomIn(): void  { this.mapRef?.zoomIn(); }
  zoomOut(): void { this.mapRef?.zoomOut(); }
  locate(): void  { this.mapRef?.locateUser(); }

  readonly iconBars        = ICON_BARS;
  readonly iconMapActive   = ICON_MAP_ACTIVE;
  readonly iconList        = ICON_LIST;
  readonly iconChevronDown = ICON_CHEVRON_DOWN;
  readonly iconLocationDot = ICON_LOCATION_DOT;
  readonly iconBell        = ICON_BELL;
  readonly iconCrosshairs  = ICON_CROSSHAIRS;
  readonly iconPlus        = ICON_PLUS;
  readonly iconMinus       = ICON_MINUS;
  readonly iconStreetView  = ICON_STREET_VIEW;
  readonly iconEllipsis    = ICON_ELLIPSIS;
}
