import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  standalone: true,
  imports: [],
  templateUrl: './plus-icon.component.html',
})
export class PlusIconComponent {

  @Input() color: string = '';
  @Input() width: number = 24;
  @Input() height: number = 24;
}
