import { FeedbackService } from '@/app/services/feedback.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent  {
  features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
  selectedFeature = this.features[0]

  constructor(private feedbackService: FeedbackService) {
    this.feedbackService.filterFeedbacks(this.selectedFeature)
   }

  onSelectFeature(event: string) {
    this.selectedFeature = event
    this.feedbackService.filterFeedbacks(this.selectedFeature)
  }
}
