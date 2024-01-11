import { PlusIconComponent } from '@/app/icons/plus-icon/plus-icon.component';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PlannedComponent } from '../feedbacks/planned/planned.component';
import { Location } from '@angular/common';
import { InProgressComponent } from '../feedbacks/in-progress/in-progress.component';
import { LiveComponent } from '../feedbacks/live/live.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roadmap-details',
  standalone: true,
  imports: [RouterLink, ButtonModule, PlusIconComponent, PlannedComponent, InProgressComponent, LiveComponent],
  templateUrl: './roadmap-details.component.html',
  styleUrl: './roadmap-details.component.css'
})
export class RoadmapDetailsComponent {
  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}
