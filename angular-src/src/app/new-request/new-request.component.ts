import { HelpRequest } from './../models/help-request';
import { HelpRequestService } from './../help-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  newRequest: HelpRequest = {
    fullname: '',
    subject: '',
    message: '',
    urgent: false
  };

  constructor(private reqService: HelpRequestService) { }

  ngOnInit() {
    this.reqService.getAll().subscribe((response) => {
      console.log(response);
    });
  }

  onSubmit() {
    this.reqService.addNew(this.newRequest).subscribe((response) => {
      alert(response);
      console.log(response);
    });
  }

}
