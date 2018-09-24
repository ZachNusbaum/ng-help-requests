import { HelpRequest } from './models/help-request';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpRequestService {
  base_uri = environment.base_uri;

  constructor(private http: HttpClient) { }

  public getAll() {
    let uri = `${this.base_uri}`;
    return this.http.get(uri);
  }

  public addNew(newRequest: HelpRequest) {
    let uri = this.base_uri;
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(uri, newRequest, {headers: headers});
  }
}
