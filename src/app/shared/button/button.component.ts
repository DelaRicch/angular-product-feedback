import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '@/types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})


export class ButtonComponent {

@Input() backgroundColor: string = '';
@Input() color: string = '';
@Input() buttonClass: string = '';
@Input() value: boolean = false;
@Input() type: ButtonType = ButtonType.Button;
@Input() disabled: boolean = false;

@Output() onClick = new EventEmitter<boolean>();

onButtonClick() {
  const updatedValue = !this.value;
  if (this.type === ButtonType.Button) {
    this.onClick.emit(updatedValue);
  }
}
}
