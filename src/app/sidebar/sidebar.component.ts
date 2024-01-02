import { Component } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
