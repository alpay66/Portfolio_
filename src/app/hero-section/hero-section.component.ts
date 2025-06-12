import { Component } from '@angular/core';
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { NgFor, NgStyle } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [HeaderBarComponent, NgFor, NgStyle],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  frontend = [
    { upper: 'F', lower: 'f' },
    { upper: 'R', lower: 'r' },
    { upper: 'O', lower: 'o' },
    { upper: 'N', lower: 'n' },
    { upper: 'T', lower: 't' },
    { upper: 'E', lower: 'e' },
    { upper: 'N', lower: 'n' },
    { upper: 'D', lower: 'd' }
  ];

  developer = [
    { upper: 'D', lower: 'd' },
    { upper: 'E', lower: 'e' },
    { upper: 'V', lower: 'v' },
    { upper: 'E', lower: 'e' },
    { upper: 'L', lower: 'l' },
    { upper: 'O', lower: 'o' },
    { upper: 'P', lower: 'p' },
    { upper: 'E', lower: 'e' },
    { upper: 'R', lower: 'r' }
  ];

  hoveredFrontendIndex: number | null = null;
  hoveredDeveloperIndex: number | null = null;
}





