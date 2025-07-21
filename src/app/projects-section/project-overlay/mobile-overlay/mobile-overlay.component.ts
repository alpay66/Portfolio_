import { Component } from '@angular/core';
import { EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-overlay',
  imports: [],
  templateUrl: './mobile-overlay.component.html',
  styleUrl: './mobile-overlay.component.scss'
})
export class MobileOverlayComponent {
  @Input() project: any;
  @Output() closeOverlay = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<void>();

  menuOpen = false;

  ngOnInit(): void {
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
