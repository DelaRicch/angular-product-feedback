import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-planned',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.css'
})
export class PlannedComponent {
constructor (private store: Store) {

}
}
