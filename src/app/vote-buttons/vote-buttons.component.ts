import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css'],
})
export class VoteButtonsComponent {
  @Output() voteValue = new EventEmitter<boolean>();
}
