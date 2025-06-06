import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Re-using the Ticket interface structure for consistency
export interface MyTicket {
  id: string;
  issue: string;
  status: 'Submitted' | 'Technician Assigned' | 'Awaiting Pickup' | 'Resolved';
  submittedDate: string;
}

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css'],
  imports: [CommonModule],
})
export class ClientPortalComponent implements OnInit {
  studentName: string = 'Alex Doe';

  deviceInfo = {
    tag: 'CB-01887',
    model: 'Chromebook 11',
    status: 'Healthy',
    accessories: ['Power Supply (65W)', 'Carrying Case (Blue)', 'Stylus Pen'],
  };

  myTickets: MyTicket[] = [
    {
      id: 'TKT-84112',
      issue: 'Camera not working during video calls.',
      status: 'Technician Assigned',
      submittedDate: '2 days ago',
    },
    {
      id: 'TKT-83598',
      issue: "Won't hold a charge for more than 1 hour.",
      status: 'Awaiting Pickup',
      submittedDate: '1 week ago',
    },
    {
      id: 'TKT-82904',
      issue: 'Trackpad was sticky.',
      status: 'Resolved',
      submittedDate: '3 weeks ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getDeviceStatusClass(): string {
    switch (this.deviceInfo.status) {
      case 'Healthy':
        return 'text-success';
      case 'Needs Attention':
        return 'text-warning';
      case 'In for Repair':
        return 'text-danger';
      default:
        return 'text-secondary';
    }
  }

  getTicketStatusClass(status: MyTicket['status']): string {
    switch (status) {
      case 'Submitted':
        return 'badge bg-primary';
      case 'Technician Assigned':
        return 'badge bg-warning text-dark';
      case 'Awaiting Pickup':
        return 'badge bg-info';
      case 'Resolved':
        return 'badge bg-success';
      default:
        return 'badge bg-secondary';
    }
  }
}
