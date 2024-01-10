import { environment } from '@/environments/environment.development';
import { Feedback } from '@/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createFeedback(data: Feedback) {
    return this.http.post(this.apiUrl + 'add-feedback', data)
  }

  editFeedback(data: Feedback) {
    return this.http.put(this.apiUrl + 'edit-feedback', data)
  }

  deleteFeedback(data: Feedback) {
    const options = {
      body: data
    }
    return this.http.delete(this.apiUrl + 'delete-feedback', options)
  }

  loadFeadback() {
    return this.http.get(this.apiUrl + 'feedbacks').pipe(map((res: any) => res.feedbacks)) 
  }
  
}
