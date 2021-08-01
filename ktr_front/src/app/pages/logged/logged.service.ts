import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  APIendpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getCards() {
    return this.http.get( this.APIendpoint + 'user/' + localStorage.getItem('user'));
  }

  // tslint:disable-next-line:typedef
  postCards(businessCard: any) {
    const bc = JSON.stringify(businessCard);
    return this.http.post( this.APIendpoint + 'business_card/' + localStorage.getItem('user'), bc, { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')});
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get( this.APIendpoint + 'users/');
  }

  // tslint:disable-next-line:typedef
  exchangeCards(userName: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post( this.APIendpoint + 'business_card/exchange/' + localStorage.getItem('user') + '/' + userName, null, { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')});
  }

}
