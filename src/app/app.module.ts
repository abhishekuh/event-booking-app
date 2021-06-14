import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

import { EventsService } from './event.service';
import { CheckoutComponent } from './checkout/checkout.component'

import { StoreModule } from '@ngrx/store';
import { eventReducer } from './reducers/event.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({ Event: eventReducer })
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
