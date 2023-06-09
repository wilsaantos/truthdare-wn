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
    this.player =
      this.player && this.player.id == 1
        ? this.players.find((el) => el.id == 2)
        : this.players.find((el) => el.id == 1);
    const randomTypeTurnInt = this.randomIntFromInterval(1, 2);
    this.selectCard(randomTypeTurnInt);
  }

  selectCard(type: number) {
    if (type == 1) {
      let card = this.truths[Math.floor(Math.random() * this.truths.length)];
      while (this.checkIfRepeat(card, type)) {
        card = this.truths[Math.floor(Math.random() * this.truths.length)];
      }
      this.cardSelected = card;
      this.truthsPassed.push(this.cardSelected);
    } else {
      let card = this.dares[Math.floor(Math.random() * this.dares.length)];
      while (this.checkIfRepeat(card, type)) {
        card = this.dares[Math.floor(Math.random() * this.dares.length)];
      }
      this.cardSelected = card;
      this.truthsPassed.push(this.cardSelected);
    }
  }

  checkIfRepeat(card: Card, type: number) {
    if (this.truthsPassed.length == 27 && this.daresPassed.length == 25) {
      this.exit();
      return window.alert('Acabou');
    }

    if (this.truthsPassed.length == 27) {
      type = 2;
    }

    if (this.truthsPassed.length == 25) {
      type = 1;
    }

    if (type == 1) {
      const isRepeat = this.truthsPassed.find((el) => el.id == card.id);
      return isRepeat ? true : false;
    } else {
      const isRepeat = this.daresPassed.find((el) => el.id == card.id);
      return isRepeat ? true : false;
    }
  }
}
