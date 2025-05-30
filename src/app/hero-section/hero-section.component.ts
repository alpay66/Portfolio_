import { Component } from '@angular/core';
import { HeaderBarComponent } from "./header-bar/header-bar.component";

@Component({
  selector: 'app-hero-section',
  imports: [HeaderBarComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
