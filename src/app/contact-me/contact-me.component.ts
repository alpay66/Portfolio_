import { Component, computed, inject } from '@angular/core';
import { ContactformComponent } from "../contactform/contactform.component";
import { FooterComponent } from "../footer/footer.component";
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactformComponent, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts = {
    de: {
      kicker: 'KONTAKTIERE MICH',
      heading: 'Bereit für eine Zusammenarbeit?',
      body: `Du suchst jemanden, der nicht nur Code schreibt, sondern auch mitdenkt?
Ich bin bereit, gemeinsam mit dir neue Ideen umzusetzen, Herausforderungen anzupacken
und aus Visionen echte Projekte werden zu lassen.
Ob für ein Teamprojekt, ein spannendes Startup oder ein persönliches Herzensprojekt –
lass uns zusammen etwas schaffen, das wirklich begeistert.`,
      copyright: '© Alpay Karacabey 2025'
    },
    en: {
      kicker: 'CONTACT ME',
      heading: 'Ready to collaborate?',
      body: `Looking for someone who doesn’t just write code but thinks along with you?
I’m ready to turn ideas into reality, tackle challenges, and bring visions to life.
Whether it’s a team project, an exciting startup, or a passion project—
let’s build something that truly excites.`,
      copyright: '© Alpay Karacabey 2025'
    }
  };
}
