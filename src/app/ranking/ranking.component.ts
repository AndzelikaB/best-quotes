import { Component, Input } from '@angular/core';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  @Input() quotesR: IQuotation[];
  @Input() title: string;
}
