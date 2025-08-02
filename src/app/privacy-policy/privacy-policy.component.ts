import { Component, computed, inject } from '@angular/core';
import { HeaderBarComponent } from '../hero-section/header-bar/header-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../services/language.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderBarComponent, FooterComponent, NgFor],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  private languageService = inject(LanguageService);
  currentLang = computed(() => this.languageService.currentLang());

  texts = {
    de: {
      title: 'Datenschutzerklärung',
      intro: 'Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend informieren wir Sie über die Art, den Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf dieser Website.',
      section1: '1. Verantwortlicher',
      name: 'Name: Alpay Karacabey',
      address: 'Adresse: Paulckestr.7, 80933 München',
      email: 'E-Mail: alpay.karacabey@hotmail.de',
      section2: '2. Erhebung und Speicherung personenbezogener Daten',
      section2Text: 'Beim Besuch dieser Website speichern unsere Server standardmäßig folgende Daten:',
      data: ['IP-Adresse', 'Datum und Uhrzeit der Anfrage', 'Browsertyp und -version', 'Betriebssystem', 'Referrer-URL'],
      section3: '3. Kontaktformular',
      section3Text: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      section4: '4. Cookies',
      section4Text: 'Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.',
      section5: '5. Ihre Rechte',
      section5Intro: 'Sie haben jederzeit das Recht auf:',
      rights: ['Auskunft über Ihre gespeicherten personenbezogenen Daten', 'Berichtigung unrichtiger Daten', 'Löschung oder Einschränkung der Verarbeitung', 'Widerspruch gegen die Verarbeitung', 'Datenübertragbarkeit'],
      section6: '6. Widerruf Ihrer Einwilligung',
      section6Text: 'Sie können eine bereits erteilte Einwilligung zur Datenverarbeitung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.',
      section7: '7. Beschwerderecht bei der Aufsichtsbehörde',
      section7Text: 'Ihnen steht im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
      section8: '8. SSL-Verschlüsselung',
      section8Text: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.',
      section9: '9. Änderungen dieser Datenschutzerklärung',
      section9Text: 'Wir behalten uns das Recht vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.'
    },
    en: {
      title: 'Privacy Policy',
      intro: 'The protection of your personal data is very important to us. Below we inform you about the type, scope and purpose of the collection and use of personal data on this website.',
      section1: '1. Controller',
      name: 'Name: Alpay Karacabey',
      address: 'Address: Paulckestr.7, 80933 Munich',
      email: 'Email: alpay.karacabey@hotmail.de',
      section2: '2. Collection and Storage of Personal Data',
      section2Text: 'When visiting this website, our servers automatically store the following data:',
      data: ['IP address', 'Date and time of the request', 'Browser type and version', 'Operating system', 'Referrer URL'],
      section3: '3. Contact Form',
      section3Text: 'If you send us inquiries via contact form, your details including the contact data you provided there will be stored by us for the purpose of processing the inquiry. We do not share this data without your consent.',
      section4: '4. Cookies',
      section4Text: 'Our website uses so-called cookies in part. Cookies do not harm your computer and do not contain viruses. They serve to make our offer more user-friendly, effective, and secure.',
      section5: '5. Your Rights',
      section5Intro: 'You have the right at any time to:',
      rights: ['Access your stored personal data', 'Correct incorrect data', 'Delete or restrict processing', 'Object to processing', 'Data portability'],
      section6: '6. Revocation of Your Consent',
      section6Text: 'You can revoke a previously granted consent to data processing at any time. A simple informal message by email to us is sufficient.',
      section7: '7. Right to Lodge a Complaint with the Supervisory Authority',
      section7Text: 'In the event of a data protection violation, you have the right to lodge a complaint with the competent supervisory authority.',
      section8: '8. SSL Encryption',
      section8Text: 'This site uses SSL encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the fact that the browser address line changes from "http://" to "https://".',
      section9: '9. Changes to This Privacy Policy',
      section9Text: 'We reserve the right to occasionally adapt this privacy policy so that it always complies with current legal requirements.'
    }
  };
}
