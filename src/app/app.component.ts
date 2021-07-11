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
    picUrl: 'piotrek.png',
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/piotrkorlaga/'
      },
      {
        name: 'github-square',
        link: 'https://github.com/piotrkorlaga'
      },
      {
        name: 'medium',
        link: 'https://medium.com/@piotrkorlaga'
      }
      ,
      {
        name: 'stack-overflow',
        link: 'https://stackoverflow.com/users/4191683/piotr-korlaga?tab=profile'
      }
    ]
  };

  private krzychu: Member = {
    name: 'Krzysztof Jedynak',
    position: 'Mobile Prophet',
    picUrl: 'krzychu.png',
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/krzysztof-jedynak-06995214a/'
      },
      {
        name: 'github-square',
        link: ''
      },
      {
        name: 'medium',
        link: ''
      }
    ]
  };

  private maciej: Member = {
    name: 'Maciej Matuszewski',
    position: 'Frontend Wizard',
    picUrl: 'potter.png',
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/maciej-matuszewski-5087a975/'
      },
      {
        name: 'github-square',
        link: 'https://github.com/maciejmatu'
      },
      {
        name: 'medium',
        link: 'https://medium.com/@maciejmatu'
      }
    ]
  };

  private mateusz: Member = {
    name: 'Mateusz Karski',
    position: 'UX/UI Godfather',
    picUrl: 'mateusz.png',
    icons: [
      {
        name: 'linkedin',
        link: ''
      },
      {
        name: 'behance-square',
        link: 'https://www.behance.net/MateuszKarski'
      },
      {
        name: 'dribbble-square',
        link: 'https://dribbble.com/MateuszKarski'
      }
    ]
  };

  private daniel: Member = {
    name: 'Daniel Karski',
    position: 'Angular Ninja',
    picUrl: 'daniel.jpg',
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/daniel-karski'
      },
      {
        name: 'github-square',
        link: 'https://github.com/dkarski'
      }
    ]
  };

  private kamil: Member = {
    name: 'Kamil Dzieniszewski',
    position: 'React Hacker, Golden Mouth Pitch Master',
    picUrl: 'kamil.jpg',
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/dzieniszewski'
      },
      {
        name: 'github-square',
        link: 'https://github.com/dzienisz'
      },
      {
        name: 'medium',
        link: 'https://medium.com/@kamildzieniszewski'
      }
    ]
  };

  private kacper: Member = {
    name: 'Kacper Mordalski',
    position: 'Full Stack Engineer',
    picUrl: 'kacper.jpg',
    icons: [
      {
        name: 'linkedin',
        link: ''
      },
      {
        name: 'github-square',
        link: ''
      },
      {
        name: 'medium',
        link: ''
      }
    ]
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
      this.kacper,
    ];
  }
}
