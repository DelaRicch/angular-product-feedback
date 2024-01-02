import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-feedback',
  standalone: true,
  imports: [],
  templateUrl: './no-feedback.component.html',
  styleUrl: './no-feedback.component.css'
})
export class NoFeedbackComponent {

  @Input() noFeedbackText: string = "There is no feedback yet.";
}
