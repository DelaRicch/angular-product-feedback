import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';
import { NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ButtonType } from '@/types';

@Component({
  selector: 'app-suggestions-header',
  standalone: true,
  imports: [ButtonComponent, PlusIconComponent, ModalComponent, NgIf],
  templateUrl: './suggestions-header.component.html',
  styleUrl: './suggestions-header.component.css',
})
export class SuggestionsHeaderComponent {

  constructor() {}
ButtonType = ButtonType;
  modalVal = false;

  openModal(val: boolean) {
    this.modalVal = val;
    console.log(val, "val")
  }
}
