// src/app/demos/client-portal/my-history/my-history.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- IMPORT

export interface HistoryEvent {
  type: 'Attendance' | 'Ticket' | 'SafetyReport' | 'ProctoredExam';
  timestamp: string;
  details: any;
}

@Component({
  selector: 'app-my-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css'],
})
export class MyHistoryComponent implements OnInit {
  // New flexible array for different event types
  myHistory: HistoryEvent[] = [
    {
      type: 'Attendance',
      timestamp: 'Today',
      details: { status: 'Present', attendancePercentage: 98.5 },
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
      timestamp: 'Yesterday',
      details: { status: 'Present', attendancePercentage: 98.25 },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Helper for event icons
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

  // Helper for status badges
  getStatusClass(status: string): string {
    switch (status) {
      case 'Technician Assigned':
        return 'badge bg-warning text-dark';
      case 'Received':
        return 'badge bg-info';
      default:
        return 'badge bg-secondary';
    }
  }
}
