import { Component, EventEmitter, Output } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { RoadmapCardComponent } from '../roadmap-card/roadmap-card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FeatureCardComponent, RoadmapCardComponent, ButtonComponent, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isMenuAppear = false;

  @Output() menuToggle = new EventEmitter();

  onMenuToggle() {
    this.isMenuAppear = !this.isMenuAppear;
    this.menuToggle.emit(this.isMenuAppear);
  }
}
