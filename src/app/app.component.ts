import { Component } from '@angular/core';
import { Card, Player, dares, truths, Type } from './consts/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'truthdare-wn';

  player: Player | null | undefined = null;
  players: Player[] = [
    { id: 1, name: 'Vez Dela' },
    { id: 2, name: 'Vez Dele' },
  ];
  truths: Card[] = truths;
  dares: Card[] = dares;

  types: Type[] = [
    { id: 1, label: 'Verdade' },
    { id: 2, label: 'Desafio' },
  ];

  truthsPassed: Card[] = [];
  daresPassed: Card[] = [];

  cardSelected: Card = {} as Card;

  constructor() {}

  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startGame() {
    const randomWhosTurnInt = this.randomIntFromInterval(1, 2);
    const randomTypeTurnInt = this.randomIntFromInterval(1, 2);
    this.player = this.players.find((el) => el.id == randomWhosTurnInt);
    this.selectCard(randomTypeTurnInt);
  }

  exit() {
    this.player = null;
    this.truthsPassed = [];
    this.daresPassed = [];
    this.cardSelected = {} as Card;
  }

  next() {
    this.player = this.player && this.player.id == 1 ? this.players.find((el) => el.id == 2) : this.players.find((el) => el.id == 1);
    const randomTypeTurnInt = this.randomIntFromInterval(1, 2);
    this.selectCard(randomTypeTurnInt)
  }

  selectCard(type: number) {
    if (type == 1) {
      this.cardSelected =
        this.truths[Math.floor(Math.random() * this.truths.length)];
      this.truthsPassed.push(this.cardSelected);
    } else {
      this.cardSelected =
        this.dares[Math.floor(Math.random() * this.dares.length)];
      this.truthsPassed.push(this.cardSelected);
    }
  }
}
