import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  eventID :any
  eventData : any

  constructor(private route: ActivatedRoute,private eventService:EventsService,private router:Router) { }

  ngOnInit(): void {

    this.eventID = this.route.snapshot.params['id'];
    this.getSingleEventData()
  }

  getSingleEventData(){
    this.eventService.getEventByID(this.eventID).subscribe(res => {
      this.eventData = []
      this.eventData.push(res)
    })
  }

  completeCheckout(){
    this.eventService.deleteEventByID(this.eventID).subscribe(res => {
      this.router.navigateByUrl('/eventList')
    })
  }

}
