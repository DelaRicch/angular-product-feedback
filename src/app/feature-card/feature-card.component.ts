import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {

  features = ["All", "UI", "UX", "Enhamcement", "Bug", "Feature"]
  selectedFeature = this.features[0]

  onSelectFeature(event: string) {
    this.selectedFeature = event
  }
}
