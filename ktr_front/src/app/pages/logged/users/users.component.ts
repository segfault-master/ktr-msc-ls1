import { Component, OnInit } from '@angular/core';
import {LoggedService} from '../logged.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private loggedService: LoggedService, private router: Router) {
    this.users = [];
  }


  ngOnInit(): void {
    this.loggedService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      }, (error: any) => {
        console.log(error);
      }
    );
  }

  exchange(name: string): void {
    this.loggedService.exchangeCards(name).subscribe(
      (response: any) => {
        this.router.navigate(['cards']);
      }, (error: any) => {
        console.log('ERROR', error);
      }
    );
  }
}
