import { Feedback } from '@/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) { }

  loadFeadback() {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
}
