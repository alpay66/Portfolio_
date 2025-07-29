import { Component, computed, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { HeaderBarComponent } from '../../hero-section/header-bar/header-bar.component';
import { NgFor } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-project-overlay',
  imports: [HeaderBarComponent, NgFor],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());


  texts: Record<'de' | 'en', {
    back: string;
    description: string;
    details: string;
    duration: string;
    github: string;
    live: string;
    next: string;
  }> = {
      en: {
        back: 'Go Back',
        description: 'Description',
        details: 'Implementation Details',
        duration: 'Duration',
        github: 'GitHub',
        live: 'Live Test',
        next: 'Next Project',
      },
      de: {
        back: 'Geh zurück',
        description: 'Beschreibung',
        details: 'Implementierungsdetails',
        duration: 'Dauer',
        github: 'GitHub',
        live: 'Live Test',
        next: 'Nächstes Projekt',
      }
    };

  @Input() project: any;
  @Output() closeOverlay = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<void>();

  menuOpen = false;

  constructor() {
    if (window.innerWidth > 820) {
      this.closeOverlay.emit();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    if (width > 820) {
      this.menuOpen = false;
      this.closeOverlay.emit();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  close() {
    this.closeOverlay.emit();
  }

  next() {
    this.nextProject.emit();
  }

  handleOverlayClick() {
    this.closeOverlay.emit();
  }

  ngOnDestroy(): void {
  }

}
