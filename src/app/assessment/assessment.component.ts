import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  assessments = [
    {
      topic: 'HTML',
      level: 'Junior',
      answers: 15,
      average: '71%'
    },
    {
      topic: 'JS',
      level: 'Middle',
      answers: 7,
      average: '56%'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
