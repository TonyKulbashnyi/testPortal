import { Component, OnInit } from '@angular/core';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  faLightbulb = faLightbulb;


  constructor() { }

  ngOnInit() {
  }

  SwitchLight() {
    console.log(123);
  }

}
