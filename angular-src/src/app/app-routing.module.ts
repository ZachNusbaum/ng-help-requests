import { NewRequestComponent } from './new-request/new-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  {path: '', component: NewRequestComponent},
  {path: 'requests', component: ViewRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
