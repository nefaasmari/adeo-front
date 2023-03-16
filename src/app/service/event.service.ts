import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    apiUrl = environment.apiUrl;
    
  constructor(private http: HttpClient) {}

  deleteEvent(id: number) {
    return this.http.delete(`${this.apiUrl}/events/${id}`);  }

  getEvents() {
    return this.http.get<any[]>(`${this.apiUrl}/events/`);

  }

  updateStars(event: any) {
    return this.http.put(`${this.apiUrl}/events/${event.id}`, event);
  }
}
