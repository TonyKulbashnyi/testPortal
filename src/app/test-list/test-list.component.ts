import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  tests =[
    {
      creator: 'EPAM',
      topic: 'JS',
      level: 'Middle'
    },
    {
      creator: 'NAU',
      topic: 'OOP',
      level: 'Junior'
    },
    {
      creator: 'EPAM',
      topic: 'HTML',
      level: 'Senior'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
