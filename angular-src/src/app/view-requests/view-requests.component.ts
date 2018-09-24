import { HelpRequest } from './../models/help-request';
import { HelpRequestService } from './../help-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests: HelpRequest[] = [];

  constructor(private reqService: HelpRequestService) { }

  ngOnInit() {
    this.reqService.getAll().subscribe((response: any) => {
      this.requests = response.reqs;
    });
  }

}
