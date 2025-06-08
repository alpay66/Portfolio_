import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderBarComponent } from "../hero-section/header-bar/header-bar.component";
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';

@Component({
  selector: 'app-projects-section',
  imports: [NgIf, HeaderBarComponent, ProjectOverlayComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  currentIndex = 0;
  showOverlay = false;

  projects = [
    {
      title: 'Join',
      image: '/img/Laptop.png',
      description: 'Task manager with drag and drop features.',
      details: 'Join is a task management application that allows users to create, manage, and organize tasks with a user-friendly drag-and-drop interface. It supports real-time collaboration, enabling teams to work together efficiently.',
      duration: '4 weeks',
    },
    {
      title: 'El Pollo Loco',
      image: '/img/el-pollo-loco.png',
      description: 'Jump & Run Game.',
      details: 'El Pollo Loco is a fun and engaging jump and run game where players control a character navigating through various levels filled with obstacles and challenges. The game features vibrant graphics and smooth gameplay mechanics.',
      duration: '3 weeks',
    },
    {
      title: 'Slack Clone',
      image: '/img/join.png',
      description: 'Collaboration app similar to Slack.',
      details: 'This project is a collaboration application that mimics the functionality of Slack, allowing users to communicate in real-time, share files, and manage channels for different teams or projects. It includes features like direct messaging, group chats, and notifications.',
      duration: '5 weeks',
    }
  ];

  openOverlay(index: number) {
    this.currentIndex = index;
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  goToNextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}

