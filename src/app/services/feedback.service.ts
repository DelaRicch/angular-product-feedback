import { environment } from '@/environments/environment.development';
import { Feedback } from '@/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = environment.apiUrl + 'feedbacks';

  constructor(private http: HttpClient) { }

  loadFeadback() {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
}
