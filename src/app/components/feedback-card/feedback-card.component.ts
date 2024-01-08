import { Component, Input } from '@angular/core';
import { UpvoteComponent } from '../upvote/upvote.component';
import { Feedback } from '@/types';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [UpvoteComponent, TitleCasePipe, RouterLink, NgClass],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css',
})
export class FeedbackCardComponent {
  constructor(private router: Router) { }
  @Input() feedback = {} as Feedback | undefined;
  @Input() isDetailsPage = false;

  onSelectFeedback(feedback: Feedback) {
    if (this.isDetailsPage) {
      this.router.navigate(['feedback-details', feedback?.id]);
    }
  }

}
