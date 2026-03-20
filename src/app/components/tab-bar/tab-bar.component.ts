import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface TabBarItem {
  label: string;
}

// Figma node: 2564:13900
// Icons below are Figma MCP raster assets fetched 2026-03-19 (expire ~7 days).
// Two variants per icon because the tab bar uses a dark background:
// nav buttons + inactive tabs render on --theme-background-inverse (#030303),
// while the active tab renders on --theme-background-elevated (white).
const ICON_MAP_INACTIVE  = 'https://www.figma.com/api/mcp/asset/33227200-c9ca-47f2-b81c-4ed07afac273';
const ICON_MAP_ACTIVE    = 'https://www.figma.com/api/mcp/asset/0faa8d49-02ee-40ef-b29a-fd719a8b7547';
const ICON_XMARK_INACTIVE = 'https://www.figma.com/api/mcp/asset/2e6a9b16-02ee-4683-9968-7a4fa32a672f';
const ICON_XMARK_ACTIVE  = 'https://www.figma.com/api/mcp/asset/0aced81e-2431-4e17-bd84-a4dbd42588c9';
const ICON_HOUSE         = 'https://www.figma.com/api/mcp/asset/b7fd45c7-b7db-4585-afd9-18abd9574f26';
const ICON_CHEVRON_LEFT  = 'https://www.figma.com/api/mcp/asset/3e628342-984d-4e6d-97fe-43c313c0272e';
const ICON_CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/fa66e6cd-2b67-449a-a0cf-89584c9ce24f';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  readonly tabs = input<TabBarItem[]>([]);
  readonly activeIndex = input<number>(0);

  readonly tabSelect = output<number>();
  readonly tabClose = output<number>();
  readonly homeClick = output<void>();
  readonly backClick = output<void>();
  readonly forwardClick = output<void>();

  readonly iconHouse = ICON_HOUSE;
  readonly iconChevronLeft = ICON_CHEVRON_LEFT;
  readonly iconChevronRight = ICON_CHEVRON_RIGHT;
  readonly iconMapInactive = ICON_MAP_INACTIVE;
  readonly iconMapActive = ICON_MAP_ACTIVE;
  readonly iconXmarkInactive = ICON_XMARK_INACTIVE;
  readonly iconXmarkActive = ICON_XMARK_ACTIVE;
}
