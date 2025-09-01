import { Component, computed, HostListener, inject } from '@angular/core';
import { HeaderBarComponent } from '../hero-section/header-bar/header-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderBarComponent, FooterComponent, RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts = {
    de: {
      title: 'Impressum',
      section1: 'Angaben gemäß § 5 TMG',
      address: 'Alpay Karacabey\nPaulckestr. 7\n80933 München',
      section2: 'Kontakt',
      phone: 'Telefon: +491745986666',
      email: 'E-Mail: alpay.karacabey@hotmail.com',
      section3: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      section4: 'Haftung für Inhalte',
      section4Text: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
die auf eine rechtswidrige Tätigkeit hinweisen.`,
      section5: 'Haftung für Links',
      section5Text: `Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.`,
      section6: 'Urheberrecht',
      section6Text: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`
    },
    en: {
      title: 'Legal Notice',
      section1: 'Information according to § 5 TMG',
      address: 'Alpay Karacabey\nPaulckestr. 7\n80933 Munich, Germany',
      section2: 'Contact',
      phone: 'Phone: +491745986666',
      email: 'Email: alpay.karacabey@hotmail.de',
      section3: 'Responsible for content according to § 55 para. 2 RStV',
      section4: 'Liability for Content',
      section4Text: `As a service provider, we are responsible for our own content on these pages according to general laws as per § 7 para. 1 TMG. 
However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored external information 
or to investigate circumstances that indicate illegal activity.`,
      section5: 'Liability for Links',
      section5Text: `Our website contains links to external third-party websites over whose content we have no influence. 
Therefore, we cannot accept any responsibility for these external contents. 
The respective provider or operator of the linked pages is always responsible for the content.`,
      section6: 'Copyright',
      section6Text: `The content and works created by the site operators on these pages are subject to German copyright law. 
Reproduction, editing, distribution, and any kind of use beyond the limits of copyright law 
require the written consent of the respective author or creator.`
    }
  };

  _texts = {
    de: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    en: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    }
  };

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
    document.documentElement.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }

  switchLanguage() {
    this.langService.switchLanguage();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 901 && this.menuOpen) {
      this.closeMenu();
    }
  }

}
