import { Component } from '@angular/core';
import { IQuotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Best Quotes';
  add: string = 'Add';
  bestQuotes: string = 'The Best';
  worstQuotes: string = 'The Worst';

  quotes: IQuotation[] = QUOTES;
  quotation: IQuotation = { author: '', sentence: '', votes: 0 };
  plusButton: boolean = false;

  visibilityAddPanel() {
    this.plusButton = !this.plusButton;
  }

  addToList() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }

  addVote(quotation: IQuotation, value: number) {
    quotation.votes += value;
  }
}
