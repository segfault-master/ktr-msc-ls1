import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  register: boolean;
  login: boolean;

  constructor() {
    this.register = false;
    this.login = false;
  }

  ngOnInit(): void {
  }

  click_login(): void {
    this.login = !this.login;
    this.register = false;
  }

  click_register(): void {
    this.login = false;
    this.register = !this.register;
  }





}
