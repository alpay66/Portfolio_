import { Component, computed, HostListener, inject } from '@angular/core';
import { LanguageService } from '../services/language.service'; // ggf. Pfad anpassen
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeaderBarComponent, NgFor, NgStyle, NgIf],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  menuOpen = false;
  isNameRevealed = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
    document.documentElement.classList.toggle('no-scroll', this.menuOpen);
  }

  switchLanguage() {
    this.langService.switchLanguage();
  }

  texts = {
    de: {
      helloWorld: 'Hallo Welt',
      name: 'Ich bin Alpay Karacabey',
      getInTouch: 'Kontakt aufnehmen',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    en: {
      helloWorld: 'Hello World',
      name: 'Im Alpay Karacabey',
      getInTouch: 'Get in touch',
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    }
  };

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

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 901 && this.menuOpen) {
      this.closeMenu();
    }
  }

  hoveredFrontendIndex: number | null = null;
  hoveredDeveloperIndex: number | null = null;
}
