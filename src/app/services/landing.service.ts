import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = `${environment.apiUrl}api/`;
   }

  post(landing): any {
    return this.http
    .post(`${this.actionUrl}landing`, landing);
  }

}
