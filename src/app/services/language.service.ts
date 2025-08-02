import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private lang = signal<'de' | 'en'>('de');

    currentLang = this.lang;

    switchLanguage() {
        const newLang = this.lang() === 'de' ? 'en' : 'de';
        this.lang.set(newLang);
    }

    setLang(lang: 'de' | 'en') {
        this.lang.set(lang);
    }

    getLang() {
        return this.lang();
    }
}
