import { RoadmapProps } from '@/types';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roadmap-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './roadmap-card.component.html',
  styleUrl: './roadmap-card.component.css'
})
export class RoadmapCardComponent {
  constructor() { }

  roadmaps: RoadmapProps[] = [
    {label: 'planned', color: '#F49F85', quantity: 0},
    {label: 'in-progress', color: '#AD1FEA', quantity: 0},
    {label: 'live', color: '#62BCFA', quantity: 0},
  ]
}
