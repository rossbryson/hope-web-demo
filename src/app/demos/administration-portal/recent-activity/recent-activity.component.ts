// src/app/demos/administration-portal/recent-activity/recent-activity.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// A more flexible interface for different activity types
export interface Activity {
  type: 'Ticket' | 'Attendance' | 'Proctoring' | 'Poll';
  timestamp: string;
  details: any;
}

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css'],
})
export class RecentActivityComponent implements OnInit {
  recentActivities: Activity[] = [
    // 1. New Attendance Activity
    {
      type: 'Attendance',
      timestamp: 'Just now',
      details: {
        checkedIn: 4891,
        total: 5012,
        percentage: 97.6,
      },
    },
    // 2. New Proctoring Activity
    {
      type: 'Proctoring',
      timestamp: '2m ago',
      details: {
        event: 'Proctored Test Initiated',
        deviceCount: 459,
        ou: 'Lincoln Park Highschool/Students/Class of 2027',
      },
    },
    // Keeping one ticket for variety
    {
      type: 'Ticket',
      timestamp: '1h ago',
      details: {
        id: 'TKT-84321',
        student: 'Miller, Sarah',
        deviceTag: 'CB-01138',
        issue: 'Cracked screen',
        status: 'Open',
      },
    },
    // 3. New Poll Activity
    {
      type: 'Poll',
      timestamp: '4h ago',
      details: {
        event: 'Poll Pushed',
        deviceCount: 105,
        ou: 'Hyde Park Academy Highschool/Students/Class of 2026',
      },
    },
    // Keeping another ticket
    {
      type: 'Ticket',
      timestamp: '1d ago',
      details: {
        id: 'TKT-84319',
        student: 'Garcia, Maria',
        deviceTag: 'CB-02451',
        issue: 'Device not charging',
        status: 'Resolved',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Helper to return a specific icon class based on activity type
  getIconClass(type: Activity['type']): string {
    switch (type) {
      case 'Ticket':
        return 'fas fa-wrench text-info';
      case 'Attendance':
        return 'fas fa-check-square text-success';
      case 'Proctoring':
        return 'fas fa-user-graduate text-primary';
      case 'Poll':
        return 'fas fa-poll text-warning';
      default:
        return 'fas fa-info-circle text-muted';
    }
  }

  // Helper for ticket status badges
  getStatusClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'badge bg-danger';
      case 'Resolved':
        return 'badge bg-success';
      default:
        return 'badge bg-secondary';
    }
  }
}
