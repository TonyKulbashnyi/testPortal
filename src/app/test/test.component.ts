import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  tests = [
    {
      question: 'Що виведе цей код?',
      codeExample: 'for(let i=0; i<10; i++) { <br> setTimeout(function() { <br> alert(i); <br>}, 100); }',
      options: [
        {
          description: 'Числа от 0 до 9.',
          correct: true
        },
        {
          description: 'Числа от 0 до 10.',
          correct: false
        },
        {
          description: '10 раз число 0.',
          correct: false
        },
        {
          description: '10 раз число 10.\n',
          correct: false
        },
        {
          description: 'Помилка: змiнна не визначена.',
          correct: false
        }
      ]


    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
