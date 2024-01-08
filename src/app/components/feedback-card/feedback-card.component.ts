import { Component, Input } from '@angular/core';
import { UpvoteComponent } from '../upvote/upvote.component';
import { Feedback } from '@/types';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [UpvoteComponent, TitleCasePipe, RouterLink],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css',
})
export class FeedbackCardComponent {
  @Input() feedback = {} as Feedback | undefined;

}
