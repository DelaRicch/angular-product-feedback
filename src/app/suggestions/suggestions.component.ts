import { Component } from '@angular/core';
import { SuggestionsHeaderComponent } from '../suggestions-header/suggestions-header.component';
import { NgIf } from '@angular/common';
import { NoFeedbackComponent } from '../no-feedback/no-feedback.component';
import { ButtonComponent } from '../shared/button/button.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [
    SuggestionsHeaderComponent,
    NoFeedbackComponent,
    ButtonComponent,
    PlusIconComponent,
    NgIf
  ],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {

constructor(private router: Router) { }

 feedbacks = [];

 addFeedback(event: boolean) {
  this.router.navigate(['/add-feedback']);
 }

}
