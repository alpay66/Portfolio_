import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactformComponent } from "./contactform/contactform.component";
import { HeaderBarComponent } from "./hero-section/header-bar/header-bar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { SkillSetSectionComponent } from "./skill-set-section/skill-set-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, AboutMeSectionComponent, SkillSetSectionComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio_';
}
