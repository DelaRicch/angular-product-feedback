import { ToastModule } from 'primeng/toast';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastService } from './services/toast.service';


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, ToastModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
  
})
export class AppComponent implements OnInit {
  title = 'product-feedback';

    constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private toastService: ToastService ) {
      this.toastService.toast$.subscribe(toast => {
        if(toast.res.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: toast.res.message,
            life: 6000
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: toast.res.message,
            life: 6000
          });
         }
      });
    }
  ngOnInit(): void {
      this.primengConfig.ripple = true;
  }

}
