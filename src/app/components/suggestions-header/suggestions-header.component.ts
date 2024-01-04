import { DropdownComponent } from '../dropdown/dropdown.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { PlusIconComponent } from '../../icons/plus-icon/plus-icon.component';
import { NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ButtonType } from '@/types';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

const enterTransition = transition(':enter', [
  style({ opacity: 0 }),
  animate(300, style({ opacity: 1, transform: 'translateY(-50%)' })),
]);

const exitTransition = transition(':leave', [
  style({ opacity: 1, transform: 'translateY(50%)' }),
  animate(300, style({ opacity: 0 })),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);
@Component({
  selector: 'app-suggestions-header',
  standalone: true,
  imports: [
    ButtonComponent,
    PlusIconComponent,
    ModalComponent,
    NgIf,
    DropdownComponent,
  ],
  templateUrl: './suggestions-header.component.html',
  styleUrl: './suggestions-header.component.css',
  animations: [fadeIn, fadeOut],
})
export class SuggestionsHeaderComponent {
  constructor(private router: Router) {}
  ButtonType = ButtonType;
  modalVal = false;

  dropdownItems = [
    'most upvotes',
    'least upvotes',
    'most comments',
    'least comments',
  ];

  openModal(val: boolean) {
    this.modalVal = val;
  }

  addFeedback(event: boolean) {
    this.router.navigate(['/add-feedback']);
  }
}
