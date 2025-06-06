// src/app/demos/client-portal/history/history.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Import for Back button

export interface HistoryEvent {
  type: 'Attendance' | 'Ticket' | 'SafetyReport' | 'ProctoredExam';
  timestamp: string;
  details: any;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  // Expanded list of historical events
  fullHistory: HistoryEvent[] = [];

  constructor() {}

  ngOnInit(): void {
    // Start with the initial items
    this.fullHistory = [
      {
        type: 'Attendance',
        timestamp: 'Today',
        details: { status: 'Present' },
      },
      {
        type: 'Ticket',
        timestamp: 'Yesterday',
        details: {
          id: 'TKT-84112',
          issue: 'Camera not working during video calls.',
          status: 'Technician Assigned',
        },
      },
      {
        type: 'SafetyReport',
        timestamp: '3 days ago',
        details: { id: 'SR-00451', status: 'Received' },
      },
      {
        type: 'ProctoredExam',
        timestamp: '4 days ago',
        details: { name: 'Biology Midterm Exam' },
      },
      {
        type: 'Attendance',
        timestamp: '4 days ago',
        details: { status: 'Present' },
      },
    ];

    // Add more mock data programmatically
    for (let i = 5; i < 25; i++) {
      const eventType = ['Attendance', 'Ticket', 'ProctoredExam'][
        Math.floor(Math.random() * 3)
      ];
      let event: HistoryEvent;
      const timestamp = `${i + 1} days ago`;

      if (eventType === 'Ticket') {
        event = {
          type: 'Ticket',
          timestamp,
          details: {
            id: `TKT-83${400 - i}`,
            issue: 'Minor software glitch reported.',
            status: 'Resolved',
          },
        };
      } else if (eventType === 'ProctoredExam') {
        event = {
          type: 'ProctoredExam',
          timestamp,
          details: { name: 'History Pop Quiz' },
        };
      } else {
        event = {
          type: 'Attendance',
          timestamp,
          details: { status: 'Present' },
        };
      }
      this.fullHistory.push(event);
    }
  }

  // Helper methods for styling
  getIconClass(type: HistoryEvent['type']): string {
    switch (type) {
      case 'Attendance':
        return 'fas fa-calendar-check text-success';
      case 'Ticket':
        return 'fas fa-ticket-alt text-primary';
      case 'SafetyReport':
        return 'fas fa-user-shield text-danger';
      case 'ProctoredExam':
        return 'fas fa-graduation-cap text-dark';
      default:
        return 'fas fa-info-circle text-muted';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Technician Assigned':
        return 'badge bg-warning text-dark';
      case 'Received':
        return 'badge bg-info';
      case 'Resolved':
        return 'badge bg-success';
      default:
        return 'badge bg-secondary';
    }
  }
}
