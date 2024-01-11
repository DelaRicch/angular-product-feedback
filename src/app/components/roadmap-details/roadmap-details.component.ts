import { PlusIconComponent } from '@/app/icons/plus-icon/plus-icon.component';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PlannedComponent } from '../feedbacks/planned/planned.component';

@Component({
  selector: 'app-roadmap-details',
  standalone: true,
  imports: [ButtonModule, PlusIconComponent, PlannedComponent],
  templateUrl: './roadmap-details.component.html',
  styleUrl: './roadmap-details.component.css'
})
export class RoadmapDetailsComponent {

}
