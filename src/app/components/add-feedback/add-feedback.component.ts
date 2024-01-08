import { ButtonType, Feedback } from '@/types';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GoBackButtonComponent } from '../go-back-button/go-back-button.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '@/app/shared/button/button.component';
import { ModalComponent } from '../modal/modal.component';
import { FeedbackService } from '@/app/services/feedback.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    ModalComponent,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.css',
})
export class AddFeedbackComponent implements OnInit {
  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
  ) {}

  categories: MenuItem[] = [
    { label: 'Feature'},
    { label: 'UI'},
    { label: 'UX'},
    { label: 'Enhancement'},
    { label: 'Bug'},
  ];
  ButtonType = ButtonType;
  displayFeatures = false;
  selectedCategory = this.categories[0].label;
  isSubmitting = false;

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl(this.selectedCategory),
    feedback: new FormControl('', [Validators.required]),
  });



  addFeedback(event: SubmitEvent) {
    event.preventDefault();
    this.isSubmitting = true;
    const { title, category, feedback } = this.formGroup.value;
    const feedbackData: Feedback = {
      title: title ?? '',
      category: category ?? '',
      details: feedback ?? '',
    };
  this.feedbackService.createFeedback(feedbackData).subscribe(
    {
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {
        this.isSubmitting = false;
        this.formGroup.reset();
        this.router.navigate(['']);
      }
    }
  )
    ;
  }

  cancelFeedBack(event: boolean) {
    this.router.navigate(['']);
  }

  toggleDisplayFeatures(event: boolean) {
    this.displayFeatures = event;
  }

  selectCategory(item: MenuItem) {
    this.selectedCategory = item.label;
    this.toggleDisplayFeatures(false);
    this.formGroup.get('category')?.setValue(this.selectedCategory);
  }

  ngOnInit(): void {
  }
}
