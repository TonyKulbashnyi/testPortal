import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics = [
    {
      img: 'assets/img/programmer-icons/vb.png',
      descr: 'VB'
    },
    {
      img: 'assets/img/programmer-icons/c++.png',
      descr: 'C++'
    },
    {
      img: 'assets/img/programmer-icons/db.png',
      descr: 'Data Base'
    },
    {
      img: 'assets/img/programmer-icons/swift.png',
      descr: 'Swift'
    },
    {
      img: 'assets/img/programmer-icons/var.png',
      descr: 'Mathematics'
    },
    {
      img: 'assets/img/programmer-icons/c.png',
      descr: 'C#'
    },
    {
      img: 'assets/img/programmer-icons/prog.png',
      descr: 'OOP'
    },
    {
      img: 'assets/img/programmer-icons/google.png',
      descr: 'Physics'
    },
    {
      img: 'assets/img/programmer-icons/html.png',
      descr: 'HTML'
    },
    {
      img: 'assets/img/programmer-icons/js.png',
      descr: 'JS'
    },
    {
      img: 'assets/img/programmer-icons/json.png',
      descr: 'JSON'
    },
    {
      img: 'assets/img/programmer-icons/jsp.png',
      descr: 'JSP'
    },
    {
      img: 'assets/img/programmer-icons/sql.png',
      descr: 'SQL'
    },
    {
      img: 'assets/img/programmer-icons/code1.png',
      descr: 'Fuctional Programming'
    },
    {
      img: 'assets/img/programmer-icons/code2.png',
      descr: 'Programming Base'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
