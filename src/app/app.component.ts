import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import {QUOTES} from './models/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  author:string = ''
  sentence:string = ''
  

  quotations: Quotation[] = [
    {
      author: "Cody",
      sentence: "Leń leń",
      votes: 3
    },
    {
      author: "Ania",
      sentence: "Końik polny leń",
      votes: 3
    },
    {
      author: "Barbara",
      sentence: "Leniwiec złośliwy",
      votes: 3
    }
  ]


  show(aut: string, sent: string){
    this.author = aut,
    this.sentence = sent

    console.log('show: ' + this.author + this.sentence)
  }

}
