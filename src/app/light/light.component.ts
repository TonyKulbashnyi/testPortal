import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {Component, OnInit} from '@angular/core';
import {darkTheme, ThemeService} from '../theme.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  darkTheme = false;
  faLightbulb = faLightbulb;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  SwitchLight() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
  }

}
