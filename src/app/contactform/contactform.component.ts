import { Component, computed, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../services/language.service';

type LangKey = 'de' | 'en';

interface ContactTexts {
  labelName: string;
  placeholderName: string;
  errorName: string;

  labelEmail: string;
  placeholderEmail: string;
  errorEmail: string;

  labelMessage: string;
  placeholderMessage: string;
  errorMessage: string;

  privacyText_1: string; 
  privacyLinkText: string;
  privacyText_2: string; 
  errorPrivacy: string;

  submit: string;
  success: string;
}

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  private langService = inject(LanguageService);
  private http = inject(HttpClient);

  currentLang = computed<LangKey>(() => this.langService.currentLang() as LangKey);

  texts: Record<LangKey, ContactTexts> = {
    de: {
      labelName: 'Wie ist dein Name?',
      placeholderName: 'Dein Name kommt hier rein',
      errorName: 'Bitte gib deinen Namen ein.',

      labelEmail: 'Wie ist deine E-Mail?',
      placeholderEmail: 'deineemail@email.com',
      errorEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',

      labelMessage: 'Wie kann ich dir helfen?',
      placeholderMessage: 'Hallo Alpay, ich bin interessiert…',
      errorMessage: 'Bitte schreibe eine Nachricht (mind. 4 Zeichen).',

      privacyText_1: 'Ich habe die ',
      privacyLinkText: 'Datenschutzerklärung',
      privacyText_2: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
      errorPrivacy: 'Du musst der Datenschutzerklärung zustimmen.',

      submit: 'Senden',
      success: '✅ Vielen Dank! Deine Nachricht wurde versendet.'
    },
    en: {
      labelName: 'What is your name?',
      placeholderName: 'Type your name here',
      errorName: 'Please enter your name.',

      labelEmail: 'What is your email?',
      placeholderEmail: 'youremail@email.com',
      errorEmail: 'Please enter a valid email address.',

      labelMessage: 'How can I help you?',
      placeholderMessage: 'Hi Alpay, I’m interested…',
      errorMessage: 'Please write a message (min. 4 characters).',

      privacyText_1: 'I have read the ',
      privacyLinkText: 'privacy policy',
      privacyText_2: ' and agree to the processing of my data.',
      errorPrivacy: 'You must accept the privacy policy.',

      submit: 'Send',
      success: '✅ Thank you! Your message has been sent.'
    }
  };

  contactData = {
    name: '',
    email: '',
    message: '',
    accepted: false
  };

  formSubmitted = false;
  sending = false;

  private readonly SEND_ENDPOINT = 'https://alpay-karacabey.de/sendMail.php';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.sending = true;
    this.formSubmitted = false;

    const payload = {
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message
    };

    this.http.post(this.SEND_ENDPOINT, payload, { responseType: 'text' }).subscribe({
      next: () => {
        this.sending = false;
        this.formSubmitted = true;
        form.resetForm({ name: '', email: '', message: '', accepted: false });
      },
      error: () => {
        this.sending = false;
      }
    });
  }
}
