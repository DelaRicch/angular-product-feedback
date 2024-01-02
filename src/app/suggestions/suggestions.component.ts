import { Component } from '@angular/core';
import { SuggestionsHeaderComponent } from '../suggestions-header/suggestions-header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [
    SuggestionsHeaderComponent,
    NgIf
  ],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
constructor() { }

}
