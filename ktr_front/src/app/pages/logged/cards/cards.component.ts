import { Component, OnInit } from '@angular/core';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: any[];
  cardPopup: boolean;

  constructor(private loggedService: LoggedService) {
    this.cards = [];
    this.cardPopup = false;
  }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.loggedService.getCards().subscribe(
      (response: any) => {
        this.cards = response.cards;
      }, (error: any) => {
        console.log(error);
      }
    );
  }

  cardOpen(): void {
    this.cardPopup = !this.cardPopup;
  }

}
