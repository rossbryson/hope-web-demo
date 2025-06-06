// src/app/demos/administration-portal/history/history.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Activity {
  type:
    | 'Attendance'
    | 'Proctoring'
    | 'Ticket'
    | 'Poll'
    | 'Notification'
    | 'SafetyReport';
  timestamp: string;
  details: any;
  user?: string; // Optional user associated with the event
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  fullHistory: Activity[] = [];

  constructor() {}

  ngOnInit(): void {
    // ... (The initial part of your fullHistory array remains the same) ...
    this.fullHistory = [
      {
        type: 'Attendance',
        timestamp: 'June 6, 2025, 10:55 AM',
        details: {
          event: 'Daily Attendance Complete',
          checkedIn: 4891,
          total: 5012,
          percentage: 97.6,
        },
        user: 'System',
      },
      {
        type: 'Proctoring',
        timestamp: 'June 6, 2025, 10:57 AM',
        details: {
          event: 'Proctored Test Initiated',
          deviceCount: 459,
          ou: 'Lincoln Park Highschool/Students/Class of 2027',
        },
        user: 'admin@hope.com',
      },
      {
        type: 'Ticket',
        timestamp: 'June 6, 2025, 9:30 AM',
        details: { id: 'TKT-84321', issue: 'Cracked screen', status: 'Open' },
        user: 'Miller, Sarah',
      },
      {
        type: 'Poll',
        timestamp: 'June 6, 2025, 8:15 AM',
        details: {
          event: 'Poll Pushed',
          deviceCount: 105,
          ou: 'Hyde Park Academy Highschool/Students/Class of 2026',
        },
        user: 'admin@hope.com',
      },
      {
        type: 'Ticket',
        timestamp: 'June 5, 2025, 4:05 PM',
        details: {
          id: 'TKT-84319',
          issue: 'Device not charging',
          status: 'Resolved',
        },
        user: 'Garcia, Maria',
      },
    ];

    // START: CORRECTED MOCK DATA GENERATION
    // 1. Define the possible event types with "as const"
    const randomEventTypes = [
      'Ticket',
      'Notification',
      'SafetyReport',
    ] as const;

    for (let i = 1; i < 25; i++) {
      // 2. Now, eventType will have the correct, specific type
      const eventType =
        randomEventTypes[Math.floor(Math.random() * randomEventTypes.length)];

      const date = new Date('2025-06-05T12:00:00');
      date.setHours(date.getHours() - i * 3);
      const timestamp = date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      let event: Activity;
      if (eventType === 'Ticket') {
        event = {
          type: 'Ticket',
          timestamp,
          details: {
            id: `TKT-83${400 - i}`,
            issue: 'Login issue reported.',
            status: 'Resolved',
          },
          user: 'Random, Student',
        };
      } else if (eventType === 'SafetyReport') {
        event = {
          type: 'SafetyReport',
          timestamp,
          details: { id: `SR-00${450 - i}`, status: 'Case Closed' },
          user: 'Anonymous',
        };
      } else {
        event = {
          type: 'Notification',
          timestamp,
          details: {
            event: 'Reminder: Half Day Schedule',
            deviceCount: 5012,
            ou: 'All Students',
          },
          user: 'principal.jones@hope.com',
        };
      }
      this.fullHistory.push(event);
    }
    // END: CORRECTED MOCK DATA GENERATION
  }

  // Helper methods
  getIconClass(type: Activity['type']): string {
    switch (type) {
      case 'Attendance':
        return 'fas fa-calendar-check text-success';
      case 'Ticket':
        return 'fas fa-ticket-alt text-primary';
      case 'Proctoring':
        return 'fas fa-chalkboard-teacher text-info';
      case 'Poll':
        return 'fas fa-poll text-warning';
      case 'SafetyReport':
        return 'fas fa-user-shield text-danger';
      case 'Notification':
        return 'fas fa-paper-plane text-secondary';
      default:
        return 'fas fa-info-circle text-muted';
    }
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'badge bg-danger';
      case 'Resolved':
        return 'badge bg-success';
      case 'Case Closed':
        return 'badge bg-secondary';
      default:
        return 'badge bg-light text-dark';
    }
  }
}
