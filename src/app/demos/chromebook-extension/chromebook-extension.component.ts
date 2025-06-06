import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chromebook-extension',
  templateUrl: './chromebook-extension.component.html',
  styleUrls: ['./chromebook-extension.component.css'],
  imports: [CommonModule],
})
export class ChromebookExtensionComponent implements OnInit {
  // This property will control which state the extension mockup is in
  extensionState: 'idle' | 'proctoring' | 'alert' = 'idle';

  // Mock data for different states
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
  setState(state: 'idle' | 'proctoring' | 'alert') {
    this.extensionState = state;
  }
}
