import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results = [
    {
      img: 'https://www.imanami.com/wp-content/uploads/2016/03/unknown-user.jpg',
      name: 'Aртем',
      surname: 'Bольнов',
      email: 'art-art123@gmail.com',
      result: '81%'
    },
    {
      img: 'https://www.imanami.com/wp-content/uploads/2016/03/unknown-user.jpg',
      name: 'Джон',
      surname: 'Баттон',
      email: 'johnbutton1888@gmail.com',
      result: '50%'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
