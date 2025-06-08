import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderBarComponent } from "../hero-section/header-bar/header-bar.component";

@Component({
  selector: 'app-projects-section',
  imports: [NgIf, HeaderBarComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  showOverlay = false;

  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

}
