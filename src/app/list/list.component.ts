import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() vote = new EventEmitter<QuotationEvent>();
  @Input() quotes: IQuotation[];

  addVote(quotation: IQuotation, value: boolean) {
    this.vote.emit({ quotation, value });
  }
}

export interface QuotationEvent {
  quotation: IQuotation;
  value: boolean;
}
