import { Component, OnInit } from '@angular/core';
import { EventsService } from '../event.service';
import { FormControl,FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  data : any
  // myform = new FormGroup({
    date = new FormControl('');
  // });

  constructor(private eventService:EventsService) { }

  eventData : any
  eventCount : any

  ngOnInit(): void {
    this.getAllEvents()
  }

  getAllEvents(){
    this.eventService.getEventsData().subscribe(res => {
      this.eventData = res
      this.eventCount = this.eventData.length
    })
  }

  refreshData(){
    this.getAllEvents()
    this.date.setValue('')
  }

  filterEvents(){
    const selectedDate = this.date.value
    console.log(this.date.value)
    this.eventData = this.eventData.filter(function(ele:any){
      let eDate = ele.date
      eDate = moment(eDate).format('YYYY-MM-DD');
      return eDate == selectedDate 
    })
    this.eventCount = this.eventData.length
  }

}
