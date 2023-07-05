import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private readonly darkModeKey = 'darkMode';

  constructor() {
    this.initializeDarkMode();
  }

  private initializeDarkMode() {
    const isDarkMode = this.isDarkModePreferred();
    this.setDarkMode(isDarkMode);
  }

  toggleDarkMode() {
    const isDarkMode = this.isDarkModePreferred();
    this.setDarkMode(!isDarkMode);
  }

  private isDarkModePreferred(): boolean {
    return JSON.parse(localStorage.getItem(this.darkModeKey) || 'false');
  }

  private setDarkMode(isDarkMode: boolean) {
    localStorage.setItem(this.darkModeKey, JSON.stringify(isDarkMode));
    const nav = document.querySelector('nav')
    if (isDarkMode) {
      document.body.classList.add('dark-mode');

    } else {
      document.body.classList.remove('dark-mode');


    }
  }
}
