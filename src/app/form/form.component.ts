import { Component, EventEmitter, Output } from '@angular/core';
import { IQuotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<IQuotation>();
  plusButton: boolean = true;
  add: string = 'Add';

  quotation: IQuotation = { author: '', sentence: '', votes: 0 };

  visibilityAddPanel() {
    this.plusButton = !this.plusButton;
  }

  addToList() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }
}
