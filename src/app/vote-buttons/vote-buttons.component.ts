import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css'],
})
export class VoteButtonsComponent {
  constructor() {}

  @Output() voteValue = new EventEmitter<boolean>();
  @Input() classPlus: string;
  @Input() classMinus: string;
}
