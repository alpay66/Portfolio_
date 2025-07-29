import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service'; // ggf. Pfad anpassen

@Component({
  selector: 'app-skill-set-section',
  standalone: true,
  templateUrl: './skill-set-section.component.html',
  styleUrls: ['./skill-set-section.component.scss']
})
export class SkillSetSectionComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts: Record<'de' | 'en', { stack: string; skills: string }> = {
    en: {
      stack: 'MY STACK',
      skills: 'Skill set'
    },
    de: {
      stack: 'MEIN STACK',
      skills: 'Fähigkeiten'
    }
  };
}
