import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FeedbackCardComponent } from '../feedback-card/feedback-card.component';
import { Store } from '@ngrx/store';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';
import { Feedback } from '@/types';
import { GoBackButtonComponent } from '../go-back-button/go-back-button.component';

@Component({
  selector: 'app-feedback-details',
  standalone: true,
  imports: [FeedbackCardComponent, ButtonModule, RouterLink, GoBackButtonComponent],
  templateUrl: './feedback-details.component.html',
  styleUrl: './feedback-details.component.css'
})
export class FeedbackDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
    this.route.params.subscribe((params) => {
      return this.feedbackId = params['id']
    })
  }


  feedbackId: string = '';
  feedback = {} as Feedback | undefined;

  handleGoBack(){
    this.router.navigate(['..']);
  }

  ngOnInit(): void {
    this.store.select(selectFeedback).subscribe((feedbacks) => {
      this.feedback = feedbacks.find((feedback) => feedback.id === this.feedbackId);
    });
  }

}
