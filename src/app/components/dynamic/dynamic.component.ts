import { Component, ComponentRef, ViewChild, ViewContainerRef, ViewRef, inject, viewChild } from '@angular/core';
import { FlashcardComponent } from '../flashcard/flashcard.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {

  @ViewChild('flashcards', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  #componentRef?: ComponentRef<FlashcardComponent>;
  // constructor(private viewContainer: ViewContainerRef) {}

  public createCard() {
    this.#componentRef = this.vcr?.createComponent(FlashcardComponent);
    this.#componentRef?.setInput('question', 'question');
    this.#componentRef?.setInput('answer', 'answer');

    // this.viewContainer.createComponent(FlashcardComponent);
  }

  public destoryCard() {
    this.vcr?.clear();
  }
}
