import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalDisplay: boolean = false;

  @Output() onClick = new EventEmitter<boolean>();

  closeModal() {
    const updatedVal = !this.modalDisplay;
    this.onClick.emit(updatedVal);
  }

}
