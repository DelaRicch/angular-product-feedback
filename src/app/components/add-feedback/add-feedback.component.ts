import { ButtonType } from '@/types';
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

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl(this.selectedCategory),
    feedback: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  cancelFeedBack(event: boolean) {
    this.router.navigate(['']);
  }

  addFeedback(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.formGroup.value);
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
