import { NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgIf, ProjectOverlayComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  private langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  texts: Record<'de' | 'en', {
    title: string;
    headline: string;
    description: string;
    button: string;
    cards: {
      title: string;
      description: string;
      image: string;
    }[];
  }> = {
      de: {
        title: 'MEIN HANDWERK',
        headline: 'Projekte',
        description:
          'Ermutige Menschen, sich deine Projekte anzusehen und mit ihnen zu interagieren. Hebe hervor, wie du responsive, benutzerfreundliche Projekte mit effizientem Code umsetzt.',
        button: 'Projekt Details',
        cards: [
          {
            title: 'Join',
            description:
              'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag & Drop und weise Nutzern und Kategorien zu.',
            image: '/img/Laptop.png'
          },
          {
            title: 'El Pollo Loco',
            description:
              `Jump-'n'-Run-Spiel basierend auf objektorientierter Programmierung. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.`,
            image: '/img/el-pollo-loco.png'
          },
          {
            title: 'Pokedex',
            description:
              'Mein Pokédex ist eine interaktive App, mit der du verschiedene Pokémon entdecken kannst – inklusive Namen, Typ, Fähigkeiten und Bildern.',
            image: '/img/pokedex-screenshot-overlay.png'
          }
        ]
      },
      en: {
        title: 'MY CRAFT',
        headline: 'Projects',
        description:
          'Encourage people to take a look and interact with your projects. Highlight your approach to creating responsive, user-friendly projects with efficient code.',
        button: 'Project details',
        cards: [
          {
            title: 'Join',
            description:
              'Task manager inspired by the Kanban system. Create and organize tasks via drag & drop and assign them to users and categories.',
            image: '/img/Laptop.png'
          },
          {
            title: 'El Pollo Loco',
            description:
              `Jump-'n'-run game based on object-oriented programming. Help Pepe collect coins and Tabasco salsa to fight the crazy chicken.`,
            image: '/img/el-pollo-loco.png'
          },
          {
            title: 'Pokedex',
            description:
              'My Pokédex is an interactive app where you can discover various Pokémon – including names, types, abilities, and images.',
            image: '/img/pokedex-screenshot-overlay.png'
          }
        ]
      }
    };

  currentIndex = 0;
  showOverlay = false;

  projects = [
    {
      title: 'Join',
      image: '/img/join-rounded.png',
      description: {
        de: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag & Drop und weise Nutzern und Kategorien zu.',
        en: 'Task manager inspired by the Kanban system. Create and organize tasks via drag & drop and assign them to users and categories.',
      },
      details: {
        de: 'Ich habe das gesamte Frontend mit Angular entwickelt und moderne Drag-&-Drop-Logik implementiert. Fokus lag auf klarer Struktur, effizientem Code und sauberem UX-Flow.',
        en: 'I built the entire frontend using Angular and implemented modern drag & drop logic. My focus was on clean structure, efficient code, and a seamless UX flow.'
      },
      duration: {
        de: 'Dauer: 4 Wochen',
        en: 'Duration: 4 weeks',
      },
      githubLink: 'https://github.com/alpay66/JOIN-PROJEKT',
      liveLink: 'https://alpay-karacabey.de/Join/index.html',
      skills: ['html', 'css', 'javascript',]
    },
    {
      title: 'El Pollo Loco',
      image: '/img/el-pollo-loco.png',
      description: {
        de: 'Jump-n-Run-Spiel basierend auf objektorientierter Programmierung. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
        en: `Jump-'n'-run game based on object-oriented programming. Help Pepe collect coins and Tabasco salsa to fight the crazy chicken.`,
      },
      details: {
        de: 'Ein spaßiges, aber technisch durchdachtes Projekt. Ich habe OOP angewendet, präzise Kollisionen programmiert und durchdachte Gegner-Logik eingebaut. Clean Code war Pflicht.',
        en: 'A fun but technically challenging project. I applied OOP principles, built accurate collision logic, and implemented smart enemy behavior. Clean code was a must.'
      },
      duration: {
        de: 'Dauer: 5 Wochen',
        en: 'Duration: 5 weeks',
      },
      githubLink: 'https://github.com/alpay66/el_pollo_loco',
      liveLink: 'https://alpay-karacabey.de/el-pollo-loco/index.html',
      skills: ['html', 'css', 'javascript']
    },
    {
      title: 'Pokedex',
      image: '/img/pokedex-screenshot-overlay.png',
      description: {
        de: 'Mein Pokédex ist eine interaktive App, mit der du verschiedene Pokémon entdecken kannst – inklusive Namen, Typ, Fähigkeiten und Bildern.',
        en: 'My Pokédex is an interactive app where you can discover various Pokémon – including names, types, abilities, and images.',
      },
      details: {
        de: 'Ich habe eine API angebunden, Pokémon dynamisch gerendert und mit modernen CSS-Techniken ein stilvolles, responsives UI geschaffen – mobil wie auf Desktop.',
        en: 'I integrated an API, rendered Pokémon dynamically, and built a sleek, responsive UI using modern CSS techniques – mobile and desktop ready.'
      }
      ,
      duration: {
        de: 'Dauer: 3 Wochen',
        en: 'Duration: 3 weeks',
      },
      githubLink: 'https://github.com/alpay66/Pokedex',
      liveLink: 'https://alpay-karacabey.de/Pokedex/index.html',
      skills: ['html', 'css', 'firebase']
    }
  ];

  openOverlay(index: number) {
    this.currentIndex = index;
    this.showOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay() {
    this.showOverlay = false;
    document.body.style.overflow = 'auto';
  }

  goToNextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}

