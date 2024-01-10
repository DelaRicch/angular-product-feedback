import { FeedbackService } from '@/app/services/feedback.service';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';
import { RoadmapProps } from '@/types';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-roadmap-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './roadmap-card.component.html',
  styleUrl: './roadmap-card.component.css'
})
export class RoadmapCardComponent implements OnInit {
  constructor(private store: Store) {}


  roadmaps: RoadmapProps[] = [
    {label: 'planned', color: '#F49F85', quantity: 0},
    {label: 'in-progress', color: '#AD1FEA', quantity: 0},
    {label: 'live', color: '#62BCFA', quantity: 0},
  ]

ngOnInit(): void {
this.store.select(selectFeedback).subscribe((feedbacks) => {
  this.roadmaps[0].quantity = feedbacks.filter((feedback) => feedback.status === 'planned').length
  this.roadmaps[1].quantity = feedbacks.filter((feedback) => feedback.status === 'in-progress').length
  this.roadmaps[2].quantity = feedbacks.filter((feedback) => feedback.status === 'live').length
})

}  
}
