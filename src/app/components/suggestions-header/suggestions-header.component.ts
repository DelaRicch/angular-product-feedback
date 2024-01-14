import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { PlusIconComponent } from '../../icons/plus-icon/plus-icon.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ButtonType, Feedback } from '@/types';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { UserService } from '@/app/services/user.service';

@Component({
  selector: 'app-suggestions-header',
  standalone: true,
  imports: [
    ButtonComponent,
    PlusIconComponent,
    ModalComponent,
    NgIf,
    AsyncPipe,
    ButtonModule,
    MenuModule
  ],
  templateUrl: './suggestions-header.component.html',
  styleUrl: './suggestions-header.component.css',
})
export class SuggestionsHeaderComponent implements OnInit {
  feedbacks$: Observable<Feedback[]> = new Observable<Feedback[]>();

  constructor(
    private router: Router,
    private store: Store,
    private userService: UserService
  ) {}
  ButtonType = ButtonType;

  selectedItem = {} as MenuItem;
  menuItems: MenuItem[] = [];
  isMenuSelected = false
  menuId = 'menu';

handleSelectItem(item: MenuItem) {
  this.selectedItem = item;
  this.isMenuSelected = true
}

  addFeedback() {
    if (!this.userService.isAuthenticated()) {
      this.userService.displayAuthModal.set(true);
      return;
    }
    this.router.navigate(['/add-feedback']);
  }

  ngOnInit(): void {
    this.feedbacks$ = this.store.select(selectFeedback);
    this.menuItems = [
      {label: 'Most Upvotes' },
      {label: 'Least Upvotes'},
      { label: 'Most Comments' },
      { label: 'Least Comments' },
    ]
  }
}
