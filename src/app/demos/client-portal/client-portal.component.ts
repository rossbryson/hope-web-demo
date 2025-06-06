// src/app/demos/client-portal/client-portal.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AssignedDeviceComponent } from './assigned-device/assigned-device.component'; // <-- IMPORT
import { MyHistoryComponent } from './my-history/my-history.component';

@Component({
  selector: 'app-client-portal',
  standalone: true,
  imports: [
    CommonModule,
    MyHistoryComponent,
    AssignedDeviceComponent, // <-- ADD TO IMPORTS
  ],
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css'],
})
export class ClientPortalComponent implements OnInit {
  studentName: string = 'Alex Doe';
  // All deviceInfo and related methods have been removed.

  constructor() {}

  ngOnInit(): void {}
}
