import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/**
 * RecordsTable — Figma node: 2143:12561/12568
 * Table panel showing form submission records.
 *
 * Panel header: "Formulário: [formTitle]" + expand button
 *   • Icon expand: Figma node I2143:12566;2007:1185;2138:6057
 *     URL: https://www.figma.com/api/mcp/asset/ec7343b5-b9c0-44e2-969c-db682dadb322
 *
 * Table columns (total 788px):
 *   # (121px) | Usuário (240px) | Data da Criação (171px) |
 *   Data da Atualização (171px) | Ações (85px)
 *
 * Row height: header 32px, data rows 57px.
 *
 * Ações ellipsis icon: Figma node I2143:12851;2007:1185;2006:674 | inset 45% 15%
 *   URL: https://www.figma.com/api/mcp/asset/14b9c809-9302-40fa-9529-de4f56718680
 */
export interface RecordRow {
  id: string;
  user: string;
  createdDate: string;
  createdTime: string;
  updatedDate: string;
  updatedTime: string;
}

@Component({
  selector: 'app-records-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './records-table.component.html',
  styleUrl: './records-table.component.scss',
})
export class RecordsTableComponent {
  readonly formTitle = input<string>('');
  readonly rows = input<RecordRow[]>([]);
  readonly expand = output<void>();

  readonly ICON_EXPAND = 'https://www.figma.com/api/mcp/asset/ec7343b5-b9c0-44e2-969c-db682dadb322';
  readonly ICON_ELLIPSIS = 'https://www.figma.com/api/mcp/asset/14b9c809-9302-40fa-9529-de4f56718680';
}
