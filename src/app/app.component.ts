import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  members: Member[] = [];

  private piotrek: Member = {
    name: 'Piotr Korlaga',
    position: 'Jack of all trades, master of none',
    picUrl: 'piotrek.png'
  };

  private krzychu: Member = {
    name: 'Krzysztof Jedynak',
    position: 'Mobile Prophet',
    picUrl: 'krzychu.png'
  };

  private maciej: Member = {
    name: 'Maciej Matuszewski',
    position: 'Frontend Wizard',
    picUrl: 'potter.png'
  };

  private mateusz: Member = {
    name: 'Mateusz Karski',
    position: 'UX/UI Godfather',
    picUrl: 'mateusz.png'
  };

  private daniel: Member = {
    name: 'Daniel Karski',
    position: 'Angular Ninja',
    picUrl: 'daniel.jpg'
  };

  private kamil: Member = {
    name: 'Kamil Dzieniszewski',
    position: 'React Hacker',
    picUrl: 'kamil.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.members = [
      this.piotrek,
      this.krzychu,
      this.maciej,
      this.mateusz,
      this.daniel,
      this.kamil,
    ];
  }
}
