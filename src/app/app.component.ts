import { ToastModule } from 'primeng/toast';
import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastService } from './services/toast.service';
import { UserService } from './services/user.service';
import { DialogModule } from 'primeng/dialog';
import { SupabaseService } from './services/supabase.service';


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, DialogModule, ToastModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
  
})
export class AppComponent implements OnInit {
  title = 'product-feedback';
  session = this.supabase.session
  displayAuthModal = false;
  
  constructor(private primengConfig: PrimeNGConfig, 
    private messageService: MessageService, 
    private toastService: ToastService, 
    private userService: UserService,
    private readonly supabase: SupabaseService
     ) {
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
      effect(() => {
        this.displayAuthModal = this.userService.displayAuthModal();
      })
    }

    hideAuthModal() {
      this.userService.displayAuthModal.set(false);
    }
    ngOnInit(): void {
      this.primengConfig.ripple = true;
      this.supabase.authChanges((_, session) => (this.session = session))
  }
}
