import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-toughts-section',
  standalone: true,
  imports: [],
  templateUrl: './toughts-section.component.html',
  styleUrl: './toughts-section.component.scss'
})
export class ToughtsSectionComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts = {
    de: {
      heading: 'Gedanken von Kollegen',
      subtitle: 'IN IHREN WORTEN:',
      quotes: [
        {
          text: `Alpay war von Anfang an jemand, auf den man sich verlassen konnte. Egal wie chaotisch das Projekt wurde – er hat einen klaren Kopf bewahrt und unser Team motiviert.`,
          name: 'Emil Kilic',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example'
        },
        {
          text: `Es war eine echte Bereicherung, mit Alpay zu arbeiten. Er bringt nicht nur technisches Know-how mit, sondern auch echtes Verständnis für Zusammenarbeit.`,
          name: 'Gabriela Ströbl',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example2'
        },
        {
          text: `Was ich an Alpay besonders schätze, ist sein Blick fürs Detail und gleichzeitig der Fokus aufs große Ganze. Er denkt mit, bringt kreative Ideen ein und hat ein gutes Gespür für Design und Code.`,
          name: 'Özgür Taylan',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example3'
        }
      ]
    },
    en: {
      heading: 'Thoughts from colleagues',
      subtitle: 'IN THEIR WORDS:',
      quotes: [
        {
          text: `From the very beginning, Alpay was someone you could rely on. No matter how chaotic the project got, he stayed calm and motivated the team. His structured approach and friendly communication made all the difference.`,
          name: 'Emil Kilic',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example'
        },
        {
          text: `It was a real pleasure working with Alpay. He brings not only technical expertise but also a deep understanding of teamwork. His solution-oriented mindset helped us meet tough deadlines with ease.`,
          name: 'Gabriela Ströbl',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example2'
        },
        {
          text: `What I especially appreciate about Alpay is his eye for detail while always keeping the big picture in mind. He thinks ahead, contributes creative ideas, and has a strong sense for both design and code. I’d gladly work with him again any time.`,
          name: 'Özgür Taylan',
          role: 'Frontend Developer',
          linkedin: 'https://www.linkedin.com/in/example3'
        }
      ]
    }
  };
}
