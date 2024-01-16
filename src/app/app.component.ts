import { ToastModule } from 'primeng/toast';
import { Component, OnInit, effect } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastService } from './services/toast.service';
import { UserService } from './services/user.service';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DialogModule, ToastModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  title = 'product-feedback';
  displayAuthModal = false;

  session = this.supabase.session

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private toastService: ToastService,
    private userService: UserService,
    private readonly supabase: UserService,
    private location: Location 
  ) {
    this.toastService.toast$.subscribe((toast) => {
      if (toast.res.success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: toast.res.message,
          life: 6000,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: toast.res.message,
          life: 6000,
        });
      }
    });
    effect(() => {
      this.displayAuthModal = this.userService.displayAuthModal();
    });

   const userLog = localStorage.getItem('sb-pxtxrrknjbqasihwshxa-auth-token') ?? "";
   if(userLog !== "") {
    this.userService.isAuthenticated.set(true);
     const user = JSON.parse(userLog)
     const userInfo = user.user.user_metadata
      console.log(userInfo);
    }
  }

  hideAuthModal() {
    this.userService.displayAuthModal.set(false);
  }

   signIn() {
     this.userService.signInWithGoogle()
     this.location.forward()
   
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}