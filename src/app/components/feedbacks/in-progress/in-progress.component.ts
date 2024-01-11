import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.css'
})
export class InProgressComponent {

}
