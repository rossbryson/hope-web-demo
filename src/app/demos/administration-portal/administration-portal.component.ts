import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Define an interface for our ticket data for type safety
export interface Ticket {
  id: string;
  student: string;
  deviceTag: string;
  issue: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Escalated';
  lastUpdate: string;
}

@Component({
  selector: 'app-administration-portal',
  templateUrl: './administration-portal.component.html',
  styleUrls: ['./administration-portal.component.css'],
  imports: [CommonModule],
})
export class AdministrationPortalComponent implements OnInit {
  // Mock data for the demo
  openTickets = 14;
  devicesOnline = 482;
  anonymousReports = 3;

  recentTickets: Ticket[] = [
    {
      id: 'TKT-84321',
      student: 'Miller, Sarah',
      deviceTag: 'CB-01138',
      issue: 'Cracked screen',
      status: 'Open',
      lastUpdate: '1h ago',
    },
    {
      id: 'TKT-84320',
      student: 'Davis, James',
      deviceTag: 'CB-00921',
      issue: 'Cannot connect to Wi-Fi',
      status: 'In Progress',
      lastUpdate: '3h ago',
    },
    {
      id: 'TKT-84319',
      student: 'Garcia, Maria',
      deviceTag: 'CB-02451',
      issue: 'Device not charging',
      status: 'Resolved',
      lastUpdate: '1d ago',
    },
    {
      id: 'TKT-84315',
      student: 'Wilson, David',
      deviceTag: 'CB-00788',
      issue: 'Keyboard unresponsive',
      status: 'Open',
      lastUpdate: '2d ago',
    },
    {
      id: 'TKT-84309',
      student: 'Chen, Wei',
      deviceTag: 'CB-01562',
      issue: 'Needs OS update (Blocked)',
      status: 'Escalated',
      lastUpdate: '3d ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Helper to return a Bootstrap badge class based on status
  getStatusClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'badge bg-danger';
      case 'In Progress':
        return 'badge bg-warning text-dark';
      case 'Resolved':
        return 'badge bg-success';
      case 'Escalated':
        return 'badge bg-info';
      default:
        return 'badge bg-secondary';
    }
  }
}
