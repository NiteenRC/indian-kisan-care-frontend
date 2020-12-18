import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoad = false;
  constructor(private http: HttpClient) { }

  getLoader() {
     this.isLoad = true;
  }
  stopLoader() {
    this.isLoad = false;
  }
}
