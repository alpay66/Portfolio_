import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {
  ngOnInit() {
    const blueLine = document.getElementById('blueLine');

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && blueLine) {
        blueLine.classList.add('animate');
      }
    });

    if (blueLine) {
      observer.observe(blueLine);
    }
  }
}
