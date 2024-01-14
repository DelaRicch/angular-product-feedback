import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
isAuthenticated = signal(false);
displayAuthModal = signal(false);
  constructor() {
  }

}
