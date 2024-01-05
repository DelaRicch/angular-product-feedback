import { Component, Input } from '@angular/core';
import { UpvoteComponent } from '../components/upvote/upvote.component';
import { Feedback } from '@/types';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [UpvoteComponent, TitleCasePipe],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css'
})
export class FeedbackCardComponent {
  @Input() feedback = {} as Feedback;
}
