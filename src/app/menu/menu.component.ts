import { Component, Input } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { RoadmapCardComponent } from '../roadmap-card/roadmap-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FeatureCardComponent, RoadmapCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
