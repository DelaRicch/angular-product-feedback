import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { Router } from '@angular/router';
import { SuggestionsHeaderComponent } from '../suggestions-header/suggestions-header.component';
import { NoFeedbackComponent } from '../no-feedback/no-feedback.component';
import { ButtonComponent } from '@/app/shared/button/button.component';
import { PlusIconComponent } from '@/app/icons/plus-icon/plus-icon.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuComponent } from '../menu/menu.component';
import { Store } from '@ngrx/store';
import * as FeedbackActions from '@/app/store/feedback/feedback.actions';

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
    NgIf,
  ],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  feedbacks = [];
  isMenuAppear = false;

  addFeedback(event: boolean) {
    this.router.navigate(['/add-feedback']);
  }

  menuToggle(event: boolean) {
    this.isMenuAppear = event;
  }

  ngOnInit(): void {
      this.store.dispatch(FeedbackActions.loadFeedback());
  }
}
