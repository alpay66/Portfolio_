import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutMeSectionComponent } from "../about-me-section/about-me-section.component";
import { SkillSetSectionComponent } from "../skill-set-section/skill-set-section.component";
import { ProjectsSectionComponent } from "../projects-section/projects-section.component";
import { ToughtsSectionComponent } from "../toughts-section/toughts-section.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, AboutMeSectionComponent, SkillSetSectionComponent, ProjectsSectionComponent, ToughtsSectionComponent, ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
