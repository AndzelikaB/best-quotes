import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import {QUOTES} from './models/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes  :Quotation[] = QUOTES;
  title :string= "Best Quotes"
  add :string = "Add"
  bestQuotes :string ="The Best"
  worstQuotes :string = "The Worst"
  ratingPlus :number = 0;
  ratingMinus :number = 0;
  counter :number
  author:string = ''
  sentence:string = ''
  plusButton: Boolean = false; 

  quotations: Quotation[] = [
    {
      author: "Robert Bieroń",
      sentence: "Leń leń",
      votes: 2
    },
    {
      author: "Ania",
      sentence: "Końik polny leń",
      votes: 7
    },
    {
      author: "Barbara",
      sentence: "Leniwiec złośliwy",
      votes: 1
    }
  ]

  visibilityAddPanel(){
    console.log('show: '+this.quotes)
    this.plusButton = !this.plusButton;

  }

  addToList(){
    const que: Quotation={
      author: this.author,
      sentence: this.sentence,
      votes: 3
    }
    this.quotations.push(que)
    this.author = '';
    this.sentence = '';
  }

  dodaj(){
    this.ratingPlus += 1;
  }
  odejmij(){
    this.ratingMinus -= 1
  }
}
