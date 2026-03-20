import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Icon library — Vigiante V2 (Figma file: O6uB8euWnYP5gOyz28MSzr)
 *
 * SVG icons (vector, colorable via currentColor):
 *   magnifying-glass, chevron-right, user, bell, vigiante-logo
 *
 * Raster icons are Figma MCP assets (node 2006:667).
 * Asset URLs expire ~7 days from fetch date (2026-03-19).
 *
 * NEVER add icons from sources other than the Figma file above.
 */

export type IconName =
  | 'align-left'
  | 'arrow-down-to-bracket'
  | 'arrow-right-from-bracket'
  | 'arrow-up-from-bracket'
  | 'arrow-up-from-square'
  | 'bars'
  | 'bell'
  | 'border-inner'
  | 'bullhorn'
  | 'bullseye'
  | 'calculator'
  | 'calendar'
  | 'calendar-lines'
  | 'calendar-week'
  | 'car-side'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle'
  | 'circle-info'
  | 'clipboard-user'
  | 'clock'
  | 'copy'
  | 'crosshairs-simple'
  | 'door-open'
  | 'draw-circle'
  | 'draw-polygon'
  | 'draw-square'
  | 'ellipsis'
  | 'ellipsis-vertical'
  | 'expand'
  | 'eye'
  | 'eye-slash'
  | 'file'
  | 'file-circle-exclamation'
  | 'file-circle-info'
  | 'file-import'
  | 'filter'
  | 'floppy-disk'
  | 'focus'
  | 'folder-open'
  | 'folder-tree'
  | 'gear'
  | 'grip-dots'
  | 'grip-dots-vertical'
  | 'grip-lines'
  | 'hexagon-check'
  | 'house'
  | 'input-numeric'
  | 'layer-group'
  | 'layer-minus'
  | 'layer-plus'
  | 'list'
  | 'list-check'
  | 'list-collection'
  | 'list-radio'
  | 'list-timeline'
  | 'list-tree'
  | 'location-crosshairs'
  | 'location-dot'
  | 'location-plus'
  | 'lock-keyhole'
  | 'magnet'
  | 'magnifying-glass'
  | 'magnifying-glass-location'
  | 'map'
  | 'map-pin'
  | 'minus'
  | 'palette'
  | 'pen-line'
  | 'pin-viewfinder'
  | 'play'
  | 'plus'
  | 'rotate-right'
  | 'ruler'
  | 'screen-users'
  | 'sensor-on'
  | 'share-nodes'
  | 'sidebar'
  | 'sliders'
  | 'trash'
  | 'user'
  | 'users'
  | 'users-rectangle'
  | 'vigiante-logo'
  | 'xmark';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    svg { display: block; }
    .ri {
      position: relative;
      overflow: hidden;
    }
    .ri > div {
      position: absolute;
    }
    .ri > div > img,
    .ri > img {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      max-width: none;
    }
  `],
  template: `
    @switch (name()) {

      <!-- ─── SVG icons (vector, respect currentColor) ─── -->

      @case ('magnifying-glass') {
        <!-- Figma node: 2045:1670 -->
        <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 12.7987 12.7987" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.6 5.2C9.6 4.62218 9.48619 4.05003 9.26507 3.51619C9.04395 2.98236 8.71985 2.49731 8.31127 2.08873C7.90269 1.68015 7.41764 1.35605 6.88381 1.13493C6.34997 0.913809 5.77782 0.8 5.2 0.8C4.62218 0.8 4.05003 0.913809 3.51619 1.13493C2.98236 1.35605 2.49731 1.68015 2.08873 2.08873C1.68015 2.49731 1.35605 2.98236 1.13493 3.51619C0.913809 4.05003 0.8 4.62218 0.8 5.2C0.8 5.77782 0.913809 6.34997 1.13493 6.88381C1.35605 7.41764 1.68015 7.90269 2.08873 8.31127C2.49731 8.71985 2.98236 9.04395 3.51619 9.26507C4.05003 9.48619 4.62218 9.6 5.2 9.6C5.77782 9.6 6.34997 9.48619 6.88381 9.26507C7.41764 9.04395 7.90269 8.71985 8.31127 8.31127C8.71985 7.90269 9.04395 7.41764 9.26507 6.88381C9.48619 6.34997 9.6 5.77782 9.6 5.2ZM8.5825 9.15C7.675 9.93 6.4925 10.4 5.2 10.4C2.3275 10.4 0 8.0725 0 5.2C0 2.3275 2.3275 0 5.2 0C8.0725 0 10.4 2.3275 10.4 5.2C10.4 6.4925 9.93 7.675 9.15 8.5825L12.6825 12.1175C12.8375 12.2725 12.8375 12.5275 12.6825 12.6825C12.5275 12.8375 12.2725 12.8375 12.1175 12.6825L8.5825 9.15Z" fill="currentColor"/>
        </svg>
      }

      @case ('chevron-right') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 28.94% 35.78% 27.32% 40%">
            <img src="https://www.figma.com/api/mcp/asset/8143ac24-e861-4792-b890-0f0397d2f57a" alt="">
          </div>
        </div>
      }

      @case ('user') {
        <!-- Figma node: 2006:788 -->
        <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 11.2 12.8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3.2 3.2C3.2 2.88483 3.26208 2.57274 3.38269 2.28156C3.5033 1.99038 3.68008 1.7258 3.90294 1.50294C4.1258 1.28008 4.39038 1.1033 4.68156 0.982689C4.97274 0.862078 5.28483 0.8 5.6 0.8C5.91517 0.8 6.22726 0.862078 6.51844 0.982689C6.80962 1.1033 7.0742 1.28008 7.29706 1.50294C7.51992 1.7258 7.6967 1.99038 7.81731 2.28156C7.93792 2.57274 8 2.88483 8 3.2C8 3.51517 7.93792 3.82726 7.81731 4.11844C7.6967 4.40962 7.51992 4.6742 7.29706 4.89706C7.0742 5.11992 6.80962 5.2967 6.51844 5.41731C6.22726 5.53792 5.91517 5.6 5.6 5.6C5.28483 5.6 4.97274 5.53792 4.68156 5.41731C4.39038 5.2967 4.1258 5.11992 3.90294 4.89706C3.68008 4.6742 3.5033 4.40962 3.38269 4.11844C3.26208 3.82726 3.2 3.51517 3.2 3.2ZM8.8 3.2C8.8 2.35131 8.46286 1.53737 7.86274 0.937258C7.26263 0.337142 6.44869 0 5.6 0C4.75131 0 3.93737 0.337142 3.33726 0.937258C2.73714 1.53737 2.4 2.35131 2.4 3.2C2.4 4.04869 2.73714 4.86263 3.33726 5.46274C3.93737 6.06286 4.75131 6.4 5.6 6.4C6.44869 6.4 7.26263 6.06286 7.86274 5.46274C8.46286 4.86263 8.8 4.04869 8.8 3.2ZM0.8 12C0.8 10.0125 2.4125 8.4 4.4 8.4H6.8C8.7875 8.4 10.4 10.0125 10.4 12V12.4C10.4 12.62 10.58 12.8 10.8 12.8C11.02 12.8 11.2 12.62 11.2 12.4V12C11.2 9.57 9.23 7.6 6.8 7.6H4.4C1.97 7.6 0 9.57 0 12V12.4C0 12.62 0.18 12.8 0.4 12.8C0.62 12.8 0.8 12.62 0.8 12.4V12Z" fill="currentColor"/>
        </svg>
      }

      @case ('bell') {
        <!-- Figma node: 2006:706 -->
        <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 11.2 12.8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5.6 0C5.38 0 5.2 0.18 5.2 0.4V0.82C3.1775 1.02 1.6 2.725 1.6 4.8V5.0575C1.6 6.185 1.215 7.28 0.5125 8.16L0.26 8.475C0.0925 8.685 0 8.9475 0 9.215C0 9.87 0.53 10.4 1.185 10.4H10.015C10.67 10.4 11.2 9.87 11.2 9.215C11.2 8.945 11.1075 8.685 10.94 8.475L10.6875 8.16C9.9825 7.28 9.6 6.185 9.6 5.0575V4.8C9.6 2.725 8.0225 1.02 6 0.82V0.4C6 0.18 5.82 0 5.6 0ZM5.6 1.6C7.3675 1.6 8.8 3.0325 8.8 4.8V5.0575C8.8 6.3675 9.245 7.6375 10.065 8.66L10.315 8.975C10.37 9.0425 10.4 9.1275 10.4 9.215C10.4 9.4275 10.2275 9.6 10.015 9.6H1.185C0.9725 9.6 0.8 9.4275 0.8 9.215C0.8 9.1275 0.83 9.0425 0.885 8.975L1.1375 8.66C1.955 7.6375 2.4 6.3675 2.4 5.0575V4.8C2.4 3.0325 3.8325 1.6 5.6 1.6ZM3.9025 11.6C4.15 12.3 4.8175 12.8 5.6 12.8C6.3825 12.8 7.05 12.3 7.2975 11.6H6.4C6.2175 11.8425 5.9275 12 5.6 12C5.2725 12 4.9825 11.8425 4.8 11.6H3.9025Z" fill="currentColor"/>
        </svg>
      }

      @case ('vigiante-logo') {
        <!-- Figma node: 2045:1044 -->
        <svg width="20.734" height="16" viewBox="0 0 20.734 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vigiante">
          <svg x="0" y="0" width="19.956" height="9.978" viewBox="0 0 19.9558 9.9779">
            <path d="M19.1984 9.9779C19.6167 9.9779 19.9588 9.63829 19.9271 9.2212C19.747 6.85155 18.7254 4.61435 17.0334 2.92237C15.1623 1.05123 12.6244 0 9.9779 0C7.33144 0 4.79351 1.05123 2.92237 2.92237C1.23038 4.61435 0.208822 6.85155 0.0287088 9.2212C-0.00299399 9.63829 0.339098 9.9779 0.757396 9.9779H3.99107C3.99107 8.39003 4.62199 6.86745 5.74449 5.74449C6.86745 4.62199 8.39003 3.99107 9.9779 3.99107C11.5658 3.99107 13.0883 4.62199 14.2113 5.74449C15.3338 6.86745 15.9647 8.39003 15.9647 9.9779H19.1984Z" fill="#A001A8"/>
          </svg>
          <svg x="3.989" y="9.978" width="11.981" height="5.988" viewBox="0 0 11.9764 5.98821">
            <path d="M0 0C0 1.58787 0.630919 3.11137 1.75388 4.23433C2.87684 5.35729 4.39988 5.98821 5.98821 5.98821C7.57609 5.98821 9.09958 5.35729 10.2225 4.23433C11.3455 3.11137 11.9764 1.58787 11.9764 0H8.60028C8.26041 0 7.99393 0.281847 7.89092 0.605726C7.79506 0.907098 7.62811 1.18424 7.40042 1.41221C7.02564 1.78653 6.51796 1.99668 5.98821 1.99668C5.45846 1.99668 4.95032 1.78653 4.576 1.41221C4.3483 1.18423 4.18118 0.90708 4.08519 0.605697C3.98205 0.281858 3.71555 0 3.37568 0H0Z" fill="#A001A8"/>
          </svg>
        </svg>
      }

      <!-- ─── Raster icons from Figma library (node 2006:667) ─── -->

      @case ('align-left') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 17.5% 15%">
            <img src="https://www.figma.com/api/mcp/asset/b21e8df9-448b-448c-b810-f9fe2a24d4c2" alt="">
          </div>
        </div>
      }

      @case ('arrow-down-to-bracket') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/d65d34c0-c670-4cf3-98e8-80319bdda897" alt="">
          </div>
        </div>
      }

      @case ('arrow-right-from-bracket') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 10%">
            <img src="https://www.figma.com/api/mcp/asset/dabac84a-905f-4842-add7-765332be26fe" alt="">
          </div>
        </div>
      }

      @case ('arrow-up-from-bracket') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/2237aa9d-a162-4100-9775-6172b80c1246" alt="">
          </div>
        </div>
      }

      @case ('arrow-up-from-square') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 5% 15% 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/b7e07a65-a6b7-4a11-ac81-be03415d01fe" alt="">
          </div>
        </div>
      }

      @case ('bars') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20% 15%">
            <img src="https://www.figma.com/api/mcp/asset/f22dac38-8dd4-430a-b323-a4c7178701d3" alt="">
          </div>
        </div>
      }

      @case ('border-inner') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15%">
            <img src="https://www.figma.com/api/mcp/asset/a44b1b76-8b5c-4bf4-a1b0-a4882910bcc6" alt="">
          </div>
        </div>
      }

      @case ('bullhorn') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 12.5% 15% 10% 10%">
            <img src="https://www.figma.com/api/mcp/asset/49d7e731-bb17-40ef-9edf-1966f97793d9" alt="">
          </div>
        </div>
      }

      @case ('bullseye') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/4746d208-86aa-4499-9ca1-9b4ec85e9b60" alt="">
          </div>
        </div>
      }

      @case ('calculator') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 20%">
            <img src="https://www.figma.com/api/mcp/asset/b4e0c32a-c1f3-417e-93c4-dde68d0c3a60" alt="">
          </div>
        </div>
      }

      @case ('calendar') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15% 15% 15%">
            <img src="https://www.figma.com/api/mcp/asset/c3f82ead-0303-4d1b-9a24-873524e09a46" alt="">
          </div>
        </div>
      }

      @case ('calendar-lines') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15% 15% 15%">
            <img src="https://www.figma.com/api/mcp/asset/a4c3cd74-7e15-4114-84d6-5d38123e6c58" alt="">
          </div>
        </div>
      }

      @case ('calendar-week') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15% 15% 15%">
            <img src="https://www.figma.com/api/mcp/asset/abca5f43-89ac-4067-9453-ab850e314a95" alt="">
          </div>
        </div>
      }

      @case ('car-side') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 0%">
            <img src="https://www.figma.com/api/mcp/asset/c575f8ed-3c65-473d-8144-9cea9c1af83a" alt="">
          </div>
        </div>
      }

      @case ('check') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20% 15%">
            <img src="https://www.figma.com/api/mcp/asset/168a1dcd-9053-49de-b3fb-73336e3dc853" alt="">
          </div>
        </div>
      }

      @case ('chevron-down') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 38.94% 26.26% 36.84% 30%">
            <img src="https://www.figma.com/api/mcp/asset/ddaf7e78-2a27-42ac-a03a-5e4dac764ad9" alt="">
          </div>
        </div>
      }

      @case ('chevron-left') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 28.94% 35.78% 27.32% 40%">
            <img src="https://www.figma.com/api/mcp/asset/3dc6136e-55b0-451f-9d3b-f4a8deead74a" alt="">
          </div>
        </div>
      }

      @case ('chevron-up') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 38.94% 26.26% 36.84% 30%">
            <img src="https://www.figma.com/api/mcp/asset/8360c22b-ce72-4adb-8582-2b202b9406a0" alt="">
          </div>
        </div>
      }

      @case ('circle') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/56d4f5ca-392f-4ee6-8223-5562ead425e9" alt="">
          </div>
        </div>
      }

      @case ('circle-info') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/eca6140a-8fb7-4533-9a67-2617449fb50e" alt="">
          </div>
        </div>
      }

      @case ('clipboard-user') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 20%">
            <img src="https://www.figma.com/api/mcp/asset/6be4833a-c30e-4e2b-a7cc-962f083da2f9" alt="">
          </div>
        </div>
      }

      @case ('clock') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/de333cb3-bd7b-467f-99ac-853f7c60b1f2" alt="">
          </div>
        </div>
      }

      @case ('copy') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/3ce1b637-65d7-42bf-8428-351234d584c3" alt="">
          </div>
        </div>
      }

      @case ('crosshairs-simple') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/96473745-3cff-42fa-956f-d7805fa1478d" alt="">
          </div>
        </div>
      }

      @case ('door-open') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/00896c1c-eedd-405e-97d4-a221a442bb51" alt="">
          </div>
        </div>
      }

      @case ('draw-circle') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 5%">
            <img src="https://www.figma.com/api/mcp/asset/e2a32f6f-ca26-4089-ac4e-513d921196a0" alt="">
          </div>
        </div>
      }

      @case ('draw-polygon') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/b890dd6f-ba08-48ad-9d5f-1c1cbb586096" alt="">
          </div>
        </div>
      }

      @case ('draw-square') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/380f9297-c465-4370-81a1-81dc49a7032c" alt="">
          </div>
        </div>
      }

      @case ('ellipsis') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 45% 15%">
            <img src="https://www.figma.com/api/mcp/asset/5d0f2f01-e1cf-45da-9754-ed11eb38cda0" alt="">
          </div>
        </div>
      }

      @case ('ellipsis-vertical') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 45%">
            <img src="https://www.figma.com/api/mcp/asset/67a9e9b3-63f8-48c1-b34c-c8e955e3e25f" alt="">
          </div>
        </div>
      }

      @case ('expand') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15%">
            <img src="https://www.figma.com/api/mcp/asset/2969079b-322c-4f22-a665-4191a6f452db" alt="">
          </div>
        </div>
      }

      @case ('eye') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 5%">
            <img src="https://www.figma.com/api/mcp/asset/e7ebfe61-f885-4512-8a6a-ec3e96c797da" alt="">
          </div>
        </div>
      }

      @case ('eye-slash') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 5%">
            <img src="https://www.figma.com/api/mcp/asset/568ae9f9-1df8-456e-b030-c0e54e24465e" alt="">
          </div>
        </div>
      }

      @case ('file') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 20%">
            <img src="https://www.figma.com/api/mcp/asset/4e29f88a-ae5b-4645-82c5-8e191168bfa6" alt="">
          </div>
        </div>
      }

      @case ('file-circle-exclamation') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 5% 5% 10%">
            <img src="https://www.figma.com/api/mcp/asset/c8d73a00-a457-4b25-a12c-505d399d6cae" alt="">
          </div>
        </div>
      }

      @case ('file-circle-info') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 5% 5% 10%">
            <img src="https://www.figma.com/api/mcp/asset/8c008132-d5c7-448b-8381-9799a6850c75" alt="">
          </div>
        </div>
      }

      @case ('file-import') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 20% 10% 10%">
            <img src="https://www.figma.com/api/mcp/asset/34d8d8d6-f190-4b6a-b573-fe6f1f246896" alt="">
          </div>
        </div>
      }

      @case ('filter') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20% 10%">
            <img src="https://www.figma.com/api/mcp/asset/f4c9b9f6-998d-482b-9897-33c449ad4115" alt="">
          </div>
        </div>
      }

      @case ('floppy-disk') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15%">
            <img src="https://www.figma.com/api/mcp/asset/1972510a-5f69-4d7b-bea9-03fd9acd4707" alt="">
          </div>
        </div>
      }

      @case ('focus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/0cd56688-015a-4210-9458-10add5d7a3b1" alt="">
          </div>
        </div>
      }

      @case ('folder-open') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 5% 20% 10%">
            <img src="https://www.figma.com/api/mcp/asset/4006a56b-1b35-4e1e-9f7d-ab33f02477b4" alt="">
          </div>
        </div>
      }

      @case ('folder-tree') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 5%">
            <img src="https://www.figma.com/api/mcp/asset/4790367a-bc01-4da1-97b9-f57b2b116c74" alt="">
          </div>
        </div>
      }

      @case ('gear') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 7.5% 9.5%">
            <img src="https://www.figma.com/api/mcp/asset/5975db13-ecce-420a-bf99-3c705817f4ac" alt="">
          </div>
        </div>
      }

      @case ('grip-dots') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 25% 10%">
            <img src="https://www.figma.com/api/mcp/asset/b844caf5-5fcc-4304-8ff9-8453344a4fee" alt="">
          </div>
        </div>
      }

      @case ('grip-dots-vertical') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 25%">
            <img src="https://www.figma.com/api/mcp/asset/ca5f6998-94b3-4704-a179-cfb52e3f21c6" alt="">
          </div>
        </div>
      }

      @case ('grip-lines') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 35% 15%">
            <img src="https://www.figma.com/api/mcp/asset/2e949e49-b933-42f8-a041-d52a09f53c69" alt="">
          </div>
        </div>
      }

      @case ('hexagon-check') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 12.5% 8.75%">
            <img src="https://www.figma.com/api/mcp/asset/dba0e5ff-e857-4430-8894-1b8b04898588" alt="">
          </div>
        </div>
      }

      @case ('house') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/130a2fb3-6568-4bc3-9046-3f752e0e5b61" alt="">
          </div>
        </div>
      }

      @case ('input-numeric') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20% 5%">
            <img src="https://www.figma.com/api/mcp/asset/d36d3b84-dc57-4938-81ef-f05467bc66e2" alt="">
          </div>
        </div>
      }

      @case ('layer-group') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/7c3ee479-1c53-4185-bff3-dafcd533cfeb" alt="">
          </div>
        </div>
      }

      @case ('layer-minus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 10% 10% 10%">
            <img src="https://www.figma.com/api/mcp/asset/f8cce5f6-caca-409b-be52-1f29d88bc0e9" alt="">
          </div>
        </div>
      }

      @case ('layer-plus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 5% 10% 10% 10%">
            <img src="https://www.figma.com/api/mcp/asset/18027e67-c98d-4597-9a64-6408c533ccbd" alt="">
          </div>
        </div>
      }

      @case ('list') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 17.5% 10% 17.5% 12.5%">
            <img src="https://www.figma.com/api/mcp/asset/f4335265-e1f7-4230-a7f9-14030fd2dffc" alt="">
          </div>
        </div>
      }

      @case ('list-check') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 10%">
            <img src="https://www.figma.com/api/mcp/asset/e690bc41-effb-4f3c-905e-e461e742da78" alt="">
          </div>
        </div>
      }

      @case ('list-collection') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 12.5%">
            <img src="https://www.figma.com/api/mcp/asset/79d47c10-72ab-469a-b905-671482db156d" alt="">
          </div>
        </div>
      }

      @case ('list-radio') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 10%">
            <img src="https://www.figma.com/api/mcp/asset/4a0c7950-eb73-4bd2-94f6-24e425662c65" alt="">
          </div>
        </div>
      }

      @case ('list-timeline') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 12.5% 10% 12.5% 15%">
            <img src="https://www.figma.com/api/mcp/asset/23e54979-aa07-48a9-8e79-8dc4788c4999" alt="">
          </div>
        </div>
      }

      @case ('list-tree') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 17.5% 10%">
            <img src="https://www.figma.com/api/mcp/asset/73524d75-b104-4965-877e-8e825cd10258" alt="">
          </div>
        </div>
      }

      @case ('location-crosshairs') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 7.5%">
            <img src="https://www.figma.com/api/mcp/asset/6e4c4ed8-3486-424f-8fbd-04dae3f786a9" alt="">
          </div>
        </div>
      }

      @case ('location-dot') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 20% 9.53% 20%">
            <img src="https://www.figma.com/api/mcp/asset/79993c6c-0228-41f8-99ce-436a0ff0b5bc" alt="">
          </div>
        </div>
      }

      @case ('location-plus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <img src="https://www.figma.com/api/mcp/asset/5b0dec04-1a08-4963-9434-9aa15828c6a8" alt="">
        </div>
      }

      @case ('lock-keyhole') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 5% 20% 10% 20%">
            <img src="https://www.figma.com/api/mcp/asset/56643088-295e-4258-a75d-b5390f950824" alt="">
          </div>
        </div>
      }

      @case ('magnet') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 15% 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/da163e49-06ee-48c1-8054-b1000df38b8b" alt="">
          </div>
        </div>
      }

      @case ('magnifying-glass-location') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/9032a442-5691-4d4d-942f-adfb4c42000b" alt="">
          </div>
        </div>
      }

      @case ('map') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 11.67% 10%">
            <img src="https://www.figma.com/api/mcp/asset/bd2fcd1e-72fa-4da6-9063-ad1b0e46f239" alt="">
          </div>
        </div>
      }

      @case ('map-pin') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 27.5%">
            <img src="https://www.figma.com/api/mcp/asset/c6231048-5be0-43ae-94c8-7d656d822b7a" alt="">
          </div>
        </div>
      }

      @case ('minus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 47.5% 15%">
            <img src="https://www.figma.com/api/mcp/asset/a9622423-ebbf-4a0d-8440-164f9707b366" alt="">
          </div>
        </div>
      }

      @case ('palette') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/c4734b32-40f2-4e84-9dc3-fdcdaea14582" alt="">
          </div>
        </div>
      }

      @case ('pen-line') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 5%">
            <img src="https://www.figma.com/api/mcp/asset/67506eaf-bd69-4090-9dfd-f3d1908c7b46" alt="">
          </div>
        </div>
      }

      @case ('pin-viewfinder') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/0cd56688-015a-4210-9458-10add5d7a3b1" alt="">
          </div>
          <div style="inset: 20% 17.5% 17.5% 20%">
            <img src="https://www.figma.com/api/mcp/asset/726b8b86-998a-4e31-85ba-206e5f7df8a9" alt="">
          </div>
        </div>
      }

      @case ('play') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 15% 15% 20%">
            <img src="https://www.figma.com/api/mcp/asset/35d68495-90b5-41c3-9969-c0106d7bad3d" alt="">
          </div>
        </div>
      }

      @case ('plus') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15%">
            <img src="https://www.figma.com/api/mcp/asset/7ac8a8ef-7146-4f7c-952f-c27b51162046" alt="">
          </div>
        </div>
      }

      @case ('rotate-right') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10%">
            <img src="https://www.figma.com/api/mcp/asset/fe8e4b56-474e-4db9-a0cc-3786485722a5" alt="">
          </div>
        </div>
      }

      @case ('ruler') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 7%">
            <img src="https://www.figma.com/api/mcp/asset/51179773-d004-4d04-8555-e3cabe9980b1" alt="">
          </div>
        </div>
      }

      @case ('screen-users') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 0%">
            <img src="https://www.figma.com/api/mcp/asset/b8795d8e-c0ec-4da0-bf2d-a884aa1e22ed" alt="">
          </div>
        </div>
      }

      @case ('sensor-on') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 15% 0%">
            <img src="https://www.figma.com/api/mcp/asset/85977149-c057-4a02-9e07-b44811c82c2b" alt="">
          </div>
        </div>
      }

      @case ('share-nodes') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 15% 10% 10%">
            <img src="https://www.figma.com/api/mcp/asset/f7651c82-35b1-42d5-9ea3-7ebe30c92024" alt="">
          </div>
        </div>
      }

      @case ('sidebar') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20% 10%">
            <img src="https://www.figma.com/api/mcp/asset/20f88182-95e8-4e07-9010-9e73832d4182" alt="">
          </div>
        </div>
      }

      @case ('sliders') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 12.5% 10%">
            <img src="https://www.figma.com/api/mcp/asset/db94208a-2233-45fa-aa82-42291f185ab3" alt="">
          </div>
        </div>
      }

      @case ('trash') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 7.5% 15% 10% 15%">
            <img src="https://www.figma.com/api/mcp/asset/cba33217-9158-4f7e-b12a-7882e6b01847" alt="">
          </div>
        </div>
      }

      @case ('users') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 12.5% 0% 15% 0%">
            <img src="https://www.figma.com/api/mcp/asset/da4cdcc5-5d00-4751-b63e-0d39411abf8a" alt="">
          </div>
        </div>
      }

      @case ('users-rectangle') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 10% 5%">
            <img src="https://www.figma.com/api/mcp/asset/eef52fac-2dde-4c61-bcec-f58c7fa6ec32" alt="">
          </div>
        </div>
      }

      @case ('xmark') {
        <div class="ri" [style.width.px]="size()" [style.height.px]="size()">
          <div style="inset: 20%">
            <img src="https://www.figma.com/api/mcp/asset/d929f33c-77ea-445f-a806-d50a2a0edb2d" alt="">
          </div>
        </div>
      }

    }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(16);
}
