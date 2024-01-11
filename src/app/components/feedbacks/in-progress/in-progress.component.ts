import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Feedback } from '@/types';
import { Store } from '@ngrx/store';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.css'
})
export class InProgressComponent {
inProgressFeedbacks = [] as Feedback[];

constructor(private store: Store) {
  this.store.select(selectFeedback).subscribe((feedbacks) => {
      this.inProgressFeedbacks = feedbacks.filter((feedback) => feedback.status === 'in-progress');
     })
}
}
