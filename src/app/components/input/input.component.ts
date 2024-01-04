import { KeyValuePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, KeyValuePipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() title: string = "";
  @Input() inputId: string = "";
  @Input() description: string = "";
  @Input() type: string = "text";
  @Input() control = new FormControl();

  errorMessages: Record<string, string> = {
    required: "Can't be empty",
  }
}
