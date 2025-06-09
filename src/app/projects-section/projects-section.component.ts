import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';

@Component({
  selector: 'app-projects-section',
  imports: [NgIf, ProjectOverlayComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  currentIndex = 0;
  showOverlay = false;

  projects = [
    {
      title: 'Join',
      image: '/img/join-rounded.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      details: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '4 weeks',
    },
    {
      title: 'El Pollo Loco',
      image: '/img/el-pollo-loco.png',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      details: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '3 weeks',
    },
    {
      title: 'Slack Clone',
      image: '/img/join-rounded.png',
      description: 'Collaboration app similar to Slack.',
      details: 'This project is a collaboration application that mimics the functionality of Slack, allowing users to communicate in real-time, share files, and manage channels for different teams or projects. It includes features like direct messaging, group chats, and notifications.',
      duration: '5 weeks',
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

