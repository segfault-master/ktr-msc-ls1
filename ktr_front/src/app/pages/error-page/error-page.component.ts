import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  error: number;
  errorList: Array<{title: string, description: string, linked: boolean, link?: string, linkTxt?: string}> = [
    {title: 'Page not Found', description: 'The page you called for don\'t exist.', linked: false},
  ];

  constructor(private route: ActivatedRoute) {
    this.error = 0;
  }

  ngOnInit(): void {
  }
}
