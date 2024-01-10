import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css'
})
export class GoBackButtonComponent {
  constructor( private location: Location) { }

goBack(){
  this.location.back();
}
}
