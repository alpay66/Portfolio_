import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  close() {
    this.closeOverlay.emit();
  }

  next() {
    this.nextProject.emit();
  }

  handleOverlayClick() {
    this.closeOverlay.emit();
  }

}
