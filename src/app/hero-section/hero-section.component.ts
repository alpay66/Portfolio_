import { Component, HostListener } from '@angular/core';
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [HeaderBarComponent, NgFor, NgStyle],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  menuOpen = false;
  currentLang: 'de' | 'en' = 'de';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    if (width > 930 && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  texts = {
    de: {
      helloWorld: 'Hallo Welt',
      name: 'Alpay Karacabey',
      getInTouch: 'Kontakt aufnehmen',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    en: {
      helloWorld: 'Hello World',
      name: 'Alpay Karacabey',
      getInTouch: 'Get in touch',
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    }
  };

    switchLanguage() {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
  }

  frontend = [
    { upper: 'F', lower: 'f' },
    { upper: 'R', lower: 'r' },
    { upper: 'O', lower: 'o' },
    { upper: 'N', lower: 'n' },
    { upper: 'T', lower: 't' },
    { upper: 'E', lower: 'e' },
    { upper: 'N', lower: 'n' },
    { upper: 'D', lower: 'd' }
  ];

  developer = [
    { upper: 'D', lower: 'd' },
    { upper: 'E', lower: 'e' },
    { upper: 'V', lower: 'v' },
    { upper: 'E', lower: 'e' },
    { upper: 'L', lower: 'l' },
    { upper: 'O', lower: 'o' },
    { upper: 'P', lower: 'p' },
    { upper: 'E', lower: 'e' },
    { upper: 'R', lower: 'r' }
  ];

  hoveredFrontendIndex: number | null = null;
  hoveredDeveloperIndex: number | null = null;
}
