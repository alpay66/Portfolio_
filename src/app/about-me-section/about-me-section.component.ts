import { Component, computed, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts = {
    de: {
      yellow: 'Lebe in München',
      blue: 'Bereit für ein Umzug',
      orange: 'Offen für remote',
      who: 'WER IST ALPAY',
      title: 'Über mich',
      paragraph1: `Servus, ich bin Alpay, angehender Frontend-Entwickler aus München.<br>
      Ich kombiniere technisches Know-how mit einem Auge für gutes Design. Aktuell mache ich eine Weiterbildung
      zum Frontend-Entwickler und vertiefe mein Wissen in <strong>HTML, CSS, JavaScript</strong> und
      <strong>Angular</strong>.<br>
      Mein Ziel: Fuß in der IT-Welt fassen und als Junior Developer durchstarten.`,
      paragraph2: `In meiner Freizeit zocke ich gern, tüftle am PC und helfe Freunden bei technischen Problemen –
      <strong>Teamwork</strong> ist für mich nicht nur im Job selbstverständlich.`,
      button: 'Lass uns austauschen'
    },
    en: {
      yellow: 'Living in Munich',
      blue: 'Open to relocate',
      orange: 'Open to remote work',
      who: 'WHO IS ALPAY',
      title: 'About me',
      paragraph1: `Hey, I’m Alpay, an aspiring frontend developer based in Munich.<br>
      I combine technical know-how with an eye for good design. I'm currently taking a course to become a frontend
      developer and deepening my knowledge in <strong>HTML, CSS, JavaScript</strong> and <strong>Angular</strong>.<br>
      My goal: get into the IT world and launch my career as a junior developer.`,
      paragraph2: `In my free time, I love gaming, tinkering with my PC, and helping friends with technical issues –
      <strong>teamwork</strong> is second nature to me.`,
      button: 'Let’s connect'
    }
  };

  ngOnInit() {
    const blueLine = document.getElementById('blueLine');

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && blueLine) {
        blueLine.classList.add('animate');
      }
    });

    if (blueLine) {
      observer.observe(blueLine);
    }
  }
}
