import { ButtonType, Feedback } from '@/types';
import { Component } from '@angular/core';
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
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ModalComponent } from '../modal/modal.component';
import { FeedbackService } from '@/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    DropdownComponent,
    ModalComponent,
  ],
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.css',
})
export class AddFeedbackComponent {
  categories = ['feature', 'ui', 'ux', 'enhancement', 'bug'];
  ButtonType = ButtonType;
  displayFeatures = false;
  selectedCategory = this.categories[0];
  isSubmitting = false;

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl(this.selectedCategory),
    feedback: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
  ) {}

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

  selectCategory(event: string) {
    this.selectedCategory = event;
    this.toggleDisplayFeatures(false);
    this.formGroup.get('category')?.setValue(this.selectedCategory);
  }
}
