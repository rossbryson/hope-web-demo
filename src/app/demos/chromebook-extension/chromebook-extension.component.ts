// src/app/demos/chromebook-extension/chromebook-extension.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chromebook-extension',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chromebook-extension.component.html',
  styleUrls: ['./chromebook-extension.component.css'],
})
export class ChromebookExtensionComponent implements OnInit {
  // 1. ADD the 'newSafetyReport' state
  extensionState:
    | 'idle'
    | 'proctoring'
    | 'alert'
    | 'newTicket'
    | 'newSafetyReport' = 'idle';

  proctoringDetails = {
    testName: 'Biology Midterm Exam',
    timeRemaining: '44:15',
    allowedSites: ['exam.school.edu', 'dictionary.com'],
    isScreenRecording: true,
    isNetworkLocked: true,
  };

  alertDetails = {
    title: 'LOCKDOWN ALERT',
    message:
      'This is an emergency alert. Please follow instructions from your teacher immediately. Remain silent and in place.',
  };

  constructor() {}

  ngOnInit(): void {}

  // Methods to allow the demo user to change the state
  setState(
    state: 'idle' | 'proctoring' | 'alert' | 'newTicket' | 'newSafetyReport'
  ) {
    // <-- Update type
    this.extensionState = state;
  }

  startNewTicket() {
    this.extensionState = 'newTicket';
  }

  // 2. ADD this new method to switch to the safety report form
  startSafetyReport() {
    this.extensionState = 'newSafetyReport';
  }
}
