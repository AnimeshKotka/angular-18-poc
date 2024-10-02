import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  isFlipped: boolean = false;

  question = input("__ques__")
  answer = input("__answer__")

  close = output<void>();

  flipCard() {
    this.isFlipped = !this.isFlipped;
    this.close.emit();
  }
}
