// src/app/demos/client-portal/assigned-device/assigned-device.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-device',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assigned-device.component.html',
  styleUrls: ['./assigned-device.component.css'],
})
export class AssignedDeviceComponent implements OnInit {
  deviceInfo = {
    tag: 'CB-01887',
    model: 'Chromebook 11',
    status: 'Healthy',
    accessories: ['Power Supply (65W)', 'Carrying Case (Blue)', 'Stylus Pen'],
  };

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
}
