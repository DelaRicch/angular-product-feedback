import { ButtonType, Feedback } from '@/types';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoBackButtonComponent } from '../go-back-button/go-back-button.component';
import { InputComponent } from '../input/input.component';
import { ModalComponent } from '../modal/modal.component';
import { FeedbackService } from '@/app/services/feedback.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { selectFeedback } from '@/app/store/feedback/feedback.selectors';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    InputComponent,
    ReactiveFormsModule,
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
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.route.params.subscribe((params) => {
      return this.feedbackId = params['id']
    })
  }

  @Input() isEditMode = false;

  categories: MenuItem[] = [
    { label: 'Feature'},
    { label: 'UI'},
    { label: 'UX'},
    { label: 'Enhancement'},
    { label: 'Bug'},
  ];

  statuses: MenuItem[] = [
    { label: 'suggestion'},
    { label: 'planned'},
    { label: 'in-progress'},
    { label: 'live'},
  ]
  selectedFeedback = {} as Feedback | undefined;
  feedbackId: string = '';
  ButtonType = ButtonType;
  displayFeatures = false;
  displayStatus = false;
  selectedCategory = this.categories[0].label;
  selectedStatus: string | undefined = "";
  isSubmitting = false;

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl(this.selectedCategory),
    status: new FormControl(this.selectedStatus),
    feedback: new FormControl('', [Validators.required]),
  });



  addFeedback(event: SubmitEvent) {
    event.preventDefault();
    this.isSubmitting = true;
    const { title, category, status, feedback } = this.formGroup.value;
    const feedbackData: Feedback = {
      id: this.feedbackId ?? "",
      title: title ?? '',
      category: category ?? '',
      status: status ?? '',
      details: feedback ?? '',
    };

  if (this.isEditMode) {
   this.feedbackService.editFeedback(feedbackData).subscribe({
     next: (v) => console.log(v),
     error: (e) => console.error(e),
     complete: () => {
       this.isSubmitting = false;
       this.formGroup.reset();
       this.router.navigate(['']);
     }
   });
  } else {
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
  }
    ;
  }

  cancelFeedBack(event: boolean) {
    this.router.navigate(['..']);
  }

  toggleDisplayFeatures(event: boolean) {
    this.displayFeatures = !this.displayFeatures;
  }

  toggleDisplayStatus(event: boolean) {
    this.displayStatus = !this.displayStatus;
  }

  selectCategory(item: MenuItem) {
    this.selectedCategory = item.label;
    this.toggleDisplayFeatures(false);
    this.formGroup.get('category')?.setValue(this.selectedCategory);
  }

  selectStatus(item: MenuItem) {
    this.selectedStatus = item.label
    this.toggleDisplayStatus(false)
    this.formGroup.get('status')?.setValue(this.selectedStatus);
  }

  ngOnInit(): void {

    if (this.feedbackId !== undefined) {
      this.isEditMode = true;
    }

    if(this.isEditMode){
      this.store.select(selectFeedback).subscribe((feedbacks) => {
        this.selectedFeedback = feedbacks.find((feedback) => feedback.id === this.feedbackId);
      });

      this.formGroup.get('title')?.setValue(this.selectedFeedback?.title!);
      this.formGroup.get('category')?.setValue(this.selectedFeedback?.category!);
      this.formGroup.get('status')?.setValue(this.selectedFeedback?.status!);
      this.formGroup.get('feedback')?.setValue(this.selectedFeedback?.details!);

      this.selectStatus({label: this.selectedFeedback?.status!})
      this.selectCategory({label: this.selectedFeedback?.category!})
      this.displayFeatures = false;
      this.displayStatus = false;
    }
  }
}
