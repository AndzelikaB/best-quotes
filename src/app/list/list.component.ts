import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() bazaCytatow: IQuotation;
  @Output() vote = new EventEmitter<DataVote>();

  addVote(quotation: IQuotation, value: boolean) {
    this.vote.emit({ quotation, value });
  }
}

export interface DataVote {
  quotation: IQuotation;
  value: boolean;
}
