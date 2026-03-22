import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecordsTableComponent, RecordRow } from '../../../../components/records-table/records-table.component';

@Component({
  selector: 'app-ds-records-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecordsTableComponent],
  templateUrl: './ds-records-table.component.html',
  styleUrl: '../ds-page.scss',
})
export class DsRecordsTableComponent {
  readonly rows: RecordRow[] = [
    { id: '#0rtc4322', user: 'pedroveloso@vigiante.com',    createdDate: '12/01/2026', createdTime: '12:32', updatedDate: '01/02/2026', updatedTime: '11:15' },
    { id: '#7wr6hu8',  user: 'thiagosales@vigiante.com',    createdDate: '19/12/2025', createdTime: '17:10', updatedDate: '23/01/2026', updatedTime: '09:19' },
    { id: '#3idj9k5',  user: 'marianaribeiro@vigiante.com', createdDate: '05/03/2024', createdTime: '09:45', updatedDate: '15/03/2026', updatedTime: '14:30' },
    { id: '#a4s8jf1',  user: 'luanaborges@vigiante.com',    createdDate: '11/07/2023', createdTime: '14:20', updatedDate: '05/04/2026', updatedTime: '16:45' },
    { id: '#b9l2mqs',  user: 'carlosandre@vigiante.com',    createdDate: '22/10/2022', createdTime: '11:15', updatedDate: '12/05/2026', updatedTime: '08:00' },
  ];
}
