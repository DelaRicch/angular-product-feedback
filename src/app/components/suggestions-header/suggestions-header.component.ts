import { DropdownComponent } from '../dropdown/dropdown.component';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { PlusIconComponent } from '../../icons/plus-icon/plus-icon.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ButtonType, Feedback } from '@/types';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';

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
    AsyncPipe,
  ],
  templateUrl: './suggestions-header.component.html',
  styleUrl: './suggestions-header.component.css',
  animations: [fadeIn, fadeOut],
})
export class SuggestionsHeaderComponent implements OnInit {
  feedbacks$: Observable<Feedback[]> = new Observable<Feedback[]>();

  constructor(private router: Router, private store: Store) {}
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

  ngOnInit(): void {
    this.feedbacks$ = this.store.select(selectFeedback);
      
  }
}
