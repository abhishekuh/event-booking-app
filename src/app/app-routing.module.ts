import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {path:'',redirectTo: '/eventList', pathMatch: 'full' },
  {path:'eventList',component:EventListComponent},
  {path:'checkout/:id',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
