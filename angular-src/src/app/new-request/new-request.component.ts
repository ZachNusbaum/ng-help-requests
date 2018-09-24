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
  }

  onSubmit() {
    this.reqService.addNew(this.newRequest).subscribe((response: any) => {
      if (response.success === true) {
        alert('Thanks for the message!');
      } else {
        alert(`Error: ${response.message}`);
      }

      console.log(response);
    }, (error) => {
      alert('Error!');
      console.log(error);
    });
  }

}
