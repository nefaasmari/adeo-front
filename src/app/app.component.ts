import { Component, OnInit } from '@angular/core';
import { EventService } from './../app/service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  deleteEvent(event: any) {
    const index = this.events.indexOf(event);
    this.eventService.deleteEvent(event.id)
      .subscribe(() => {
        this.events.splice(index, 1);
      });
  }

  updateStars(event: any) {
    this.eventService.updateStars(event)
      .subscribe();
  }
}