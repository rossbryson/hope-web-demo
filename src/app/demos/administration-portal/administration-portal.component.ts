// src/app/demos/administration-portal/administration-portal.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviceMapComponent } from './device-map/device-map.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component'; // <-- IMPORT new component

@Component({
  selector: 'app-administration-portal',
  standalone: true,
  imports: [
    CommonModule,
    DeviceMapComponent,
    RecentActivityComponent, // <-- ADD new component to imports
  ],
  templateUrl: './administration-portal.component.html',
  styleUrls: ['./administration-portal.component.css'],
})
export class AdministrationPortalComponent implements OnInit {
  // Mock data for the demo
  openTickets = 14;
  devicesOnline = 482;
  anonymousReports = 3;

  // The recentTickets array and getStatusClass method have been removed from here

  constructor() {}

  ngOnInit(): void {}
}
