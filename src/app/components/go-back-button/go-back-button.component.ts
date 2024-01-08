import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css'
})
export class GoBackButtonComponent {
  constructor( private location: Location) { }

goBack(){
  this.location.back();
}
}
