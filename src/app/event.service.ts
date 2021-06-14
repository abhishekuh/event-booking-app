import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  getEventsData(){
    return this.http.get('http://localhost:3000/events')
  }

  getEventByID(id:number){
    return this.http.get(`http://localhost:3000/events/`+id)
  }

  deleteEventByID(id:number){
    return this.http.delete(`http://localhost:3000/events/`+id)
  }
}
