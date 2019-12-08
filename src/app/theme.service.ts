import { Injectable } from '@angular/core';

export const darkTheme = {
  'theme-background': '#1f2935',
  'theme-helper': '#7d7d94',
};

export const lightTheme = {
  'theme-background': '#fff',
  'theme-helper': '#e6e6e6',
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
