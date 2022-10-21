import { Component } from '@angular/core';
import { IQuotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: IQuotation[] = QUOTES;

  addVote(quotation: IQuotation, addVote: boolean) {
    quotation.votes = addVote ? quotation.votes + 1 : quotation.votes - 1;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: IQuotation) {
    this.quotes.unshift(quotation);
  }
}
