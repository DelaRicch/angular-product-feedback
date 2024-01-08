import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
  title = 'product-feedback';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
      this.primengConfig.ripple = true;
  }
}
