import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { HeaderBarComponent } from '../../hero-section/header-bar/header-bar.component';

@Component({
  selector: 'app-project-overlay',
  imports: [HeaderBarComponent],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {
  @Input() project: any;
  @Output() closeOverlay = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<void>();

  menuOpen = false;

  constructor() {
    // Initial check in case window is already > 820px
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
