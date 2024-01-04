import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent  {
@Input() dropdownItems: string[] = [];
@Input() modalDisplay: boolean = false;
@Input() selectedItem: string = "";

@Output() onClick = new EventEmitter<string>();

onDropdownClick(event: string){
  this.selectedItem = event;
  this.onClick.emit(this.selectedItem);
}

}

