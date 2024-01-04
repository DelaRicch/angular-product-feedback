import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css'
})
export class GoBackButtonComponent {
  constructor(private router: Router) { }

goBack(){
  this.router.navigate([""]);
}
}
