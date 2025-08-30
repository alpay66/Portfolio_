import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service'; // Pfad ggf. anpassen
import { Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

type Lang = 'de' | 'en';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  private languageService = inject(LanguageService);
  currentLang = computed(() => this.languageService.currentLang());

  @Output() linkClicked = new EventEmitter<void>();

  texts: Record<Lang, { about: string; skills: string; projects: string; contact: string }> = {
    en: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    de: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    }
  };

  switchLanguage() {
    this.languageService.switchLanguage();
  }
}
