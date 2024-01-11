import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-planned',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.css'
})
export class PlannedComponent {

}
