import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  _texts = {
    de: {
      impressum: 'Impressum',
    },
    en: {
      impressum: 'Legal Notice',
    }
  };

  switchLanguage() {
    this.langService.switchLanguage();
  }
}
