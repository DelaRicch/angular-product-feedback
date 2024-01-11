import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent {

}
