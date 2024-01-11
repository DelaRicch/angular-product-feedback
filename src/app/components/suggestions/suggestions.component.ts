import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';

import { Router } from '@angular/router';
import { SuggestionsHeaderComponent } from '../suggestions-header/suggestions-header.component';
import { NoFeedbackComponent } from '../no-feedback/no-feedback.component';
import { ButtonComponent } from '@/app/shared/button/button.component';
import { PlusIconComponent } from '@/app/icons/plus-icon/plus-icon.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuComponent } from '../menu/menu.component';
import { Store } from '@ngrx/store';
import * as FeedbackActions from '@/app/store/feedback/feedback.actions';
import { Observable } from 'rxjs';
import { Feedback } from '@/types';
import {
  selectFeedback,
  selectFeedbackError,
  selectFeedbackLoading,
} from '@/app/store/feedback/feedback.selectors';
import { FeedbackCardComponent } from '@/app/components/feedback-card/feedback-card.component';
import { LoadingComponent } from '../loading/loading.component';
import { FeedbackService } from '@/app/services/feedback.service';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [
    SuggestionsHeaderComponent,
    NoFeedbackComponent,
    ButtonComponent,
    PlusIconComponent,
    SidebarComponent,
    MenuComponent,
    FeedbackCardComponent,
    LoadingComponent,
    NgIf,
    NgFor,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent implements OnInit {
  feedbacks$: Observable<Feedback[]> = new Observable<Feedback[]>();
  feedbacks = [] as Feedback[];
  loading$: Observable<boolean> = new Observable<boolean>();
  error$: Observable<string | null> = new Observable<string | null>();

  constructor(
    private router: Router,
    private store: Store,
    private feedbackService: FeedbackService
  ) {
    this.feedbackService.feedbackFilter$.subscribe((filter) => {
      if (filter === 'All') {
        this.store.select(selectFeedback).subscribe((res) => {
         this.feedbacks = res;
        });
      } else {
        this.store.select(selectFeedback).subscribe((res) => {
         this.feedbacks = res.filter((feedback) => feedback.category === filter);
        });
      }
    })
  }
  isMenuAppear = false;

  addFeedback() {
    this.router.navigate(['/add-feedback']);
  }

  menuToggle(event: boolean) {
    this.isMenuAppear = event;
  }

  ngOnInit(): void {
    this.store.dispatch(FeedbackActions.loadFeedback());

    // this.feedbacks$ = this.store.select(selectFeedback);
    this.loading$ = this.store.select(selectFeedbackLoading);
    this.error$ = this.store.select(selectFeedbackError);
  }
}
