import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';
import { Feedback } from '@/types';

@Component({
  selector: 'app-planned',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.css'
})
export class PlannedComponent implements OnInit {
@Output() totalPlannedFeedbacks = new EventEmitter<number>();
  plannedFeedbacks = [] as Feedback[];

  constructor(private store: Store) {
  this.store.select(selectFeedback).subscribe((feedbacks) => {
      this.plannedFeedbacks = feedbacks.filter((feedback) => feedback.status === 'planned');
    })
  }
  
  ngOnInit(): void {
    this.totalPlannedFeedbacks.emit(this.plannedFeedbacks.length);
  }
}