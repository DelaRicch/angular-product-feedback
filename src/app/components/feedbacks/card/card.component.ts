import { Component, Input, OnInit } from '@angular/core';

type FeedbackTypeProp = 'planned' | 'in-progress' | 'live';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent implements OnInit {

  @Input() feedbackType: FeedbackTypeProp = 'planned';

  feedbackDetails = {
    label: '',
    color: '',
  }

ngOnInit(): void {
  if (this.feedbackType === 'planned') {
    this.feedbackDetails = {
      label: 'Planned',
      color: '#F49F85',
    };
  } else if (this.feedbackType === 'in-progress') {
    this.feedbackDetails = {
      label: 'In Progress',
      color: '#AD1FEA',
    };
  } else if (this.feedbackType === 'live') {
    this.feedbackDetails = {
      label: 'Live',
      color: '#62BCFA',
    };
  }
}
}
