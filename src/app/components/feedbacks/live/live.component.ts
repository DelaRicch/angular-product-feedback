import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Feedback } from '@/types';
import { Store } from '@ngrx/store';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
  @Output() totalLiveFeedbacks = new EventEmitter<number>();
  liveFeedbacks = [] as Feedback[];

  constructor(private store: Store) {
    this.store.select(selectFeedback).subscribe((feedbacks) => {
        this.liveFeedbacks = feedbacks.filter((feedback) => feedback.status === 'live');
       })
  }

  ngOnInit(): void {
    this.totalLiveFeedbacks.emit(this.liveFeedbacks.length);
   }
}
