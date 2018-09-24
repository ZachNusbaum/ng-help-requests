import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HelpRequestService } from './help-request.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRequestComponent,
    ViewRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HelpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
