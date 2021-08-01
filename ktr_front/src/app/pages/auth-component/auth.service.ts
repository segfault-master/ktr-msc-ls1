import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIendpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient, private router: Router) { }

  // tslint:disable-next-line:typedef
  register(user: any) {
    const body = JSON.stringify(user);
    return this.http.post( this.APIendpoint + 'users', body, { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')});
  }

  // tslint:disable-next-line:typedef
  login(user: any) {
    const body = JSON.stringify(user);
    return this.http.post( this.APIendpoint + 'users/login', body, { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')});
  }
}
