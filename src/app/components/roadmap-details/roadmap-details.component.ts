import { PlusIconComponent } from '@/app/icons/plus-icon/plus-icon.component';
import { Component, WritableSignal, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PlannedComponent } from '../feedbacks/planned/planned.component';
import { Location, NgClass, NgStyle } from '@angular/common';
import { InProgressComponent } from '../feedbacks/in-progress/in-progress.component';
import { LiveComponent } from '../feedbacks/live/live.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-roadmap-details',
  standalone: true,
  imports: [RouterLink, ButtonModule, PlusIconComponent, PlannedComponent, InProgressComponent, LiveComponent, NgStyle, NgClass],
  templateUrl: './roadmap-details.component.html',
  styleUrl: './roadmap-details.component.css'
})
export class RoadmapDetailsComponent {
  constructor(private location: Location) {}
  totalPlannedFeedbacks = signal(0);
  totalInProgressFeedbacks = 0;
  totalLiveFeedbacks = 0;

  feedbacks = [
    signal({
      title: "Planned",
      total: 0,
      color: "#F49F85"
    }),
    signal({
      title: "In-Progress",
      total: 0,
      color: "#AD1FEA"
    }),
    signal({
      title: "Live",
      total: 0,
      color: "#62BCFA"
    }),
  ] 

  activeFeedback = signal({
    title: "Planned",
    total: 0,
    color: "#F49F85"
  });

  selectTotalPlannedFeedbacks(val: number){
    this.feedbacks[0].set({...this.feedbacks[0](), total: val});
  }

  selectTotalInProgressFeedbacks(val: number){
    this.feedbacks[1].set({...this.feedbacks[1](), total: val});
    
  }

  selectTotalLiveFeedbacks(val: number){
    this.feedbacks[2].set({...this.feedbacks[2](), total: val});
    
  }

  selectActiveFeedback(feedback: {title: string, total: number, color: string}){
    this.activeFeedback.set({...this.activeFeedback(), ...feedback});{
  }
}

  goBack(){
    this.location.back();
  }
}
