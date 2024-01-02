import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit {
@Input() dropdownItems: string[] = [];
@Input() modalDisplay: boolean = false;
selectedItem: string = "";

@Output() onClick = new EventEmitter<string>();

onDropdownClick(event: string){
  this.selectedItem = event;
  this.onClick.emit(this.selectedItem);
  console.log(event, "event")
}

ngOnInit(): void {
    this.selectedItem = this.dropdownItems[0];
}
}

