import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QUOTES } from '../models/database';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() vote = new EventEmitter<QuotationEvent>();
  @Input() quotes: IQuotation[] = QUOTES;

  addVote(quotation: IQuotation, addVote: boolean) {
    this.vote.emit({ quotation, addVote });
  }
}

export interface QuotationEvent {
  quotation: IQuotation;
  addVote: boolean;
}
