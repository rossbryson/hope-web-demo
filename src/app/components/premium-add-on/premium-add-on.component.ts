// src/app/components/premium-add-on/premium-add-on.component.ts
import { CommonModule, NgClass } from '@angular/common'; // Import NgClass
import { Component } from '@angular/core';

interface PremiumFeature {
  name: string;
  // icon: string; // Original emoji icon, can be removed or kept for reference
  faIcon: string; // Font Awesome icon class e.g., 'fa-map-marked-alt'
  faIconColor?: string; // Optional: e.g. 'text-danger' for specific icon color
  description: string[];
}

@Component({
  selector: 'app-premium-add-on',
  standalone: true,
  imports: [CommonModule, NgClass], // Add NgClass
  templateUrl: './premium-add-on.component.html',
  styleUrl: './premium-add-on.component.css',
})
export class PremiumAddOnComponent {
  title = 'Premium Add-On';
  subtitle = 'Unlock advanced safety, communication, and compliance workflows.';
  premiumFeatures: PremiumFeature[] = [
    {
      name: 'Enhanced Location Tracking',
      faIcon: 'fa-map-marked-alt',
      faIconColor: 'text-success',
      description: [
        'HTML5 geolocation attendance when Wi-Fi isn’t available.',
        'Supports field trips, off-campus programs, and hybrid learning.',
      ],
    },
    {
      name: 'Push Services',
      faIcon: 'fa-bullhorn',
      faIconColor: 'text-info',
      description: [
        'Attendance/check-in prompts (scheduled or instant reminders).',
        'Emergency alerts to all devices.',
        'Polls & surveys for quick feedback.',
        'Welfare checks during emergencies (fires, lockdowns, hurricanes).',
      ],
    },
    {
      name: 'Safety Reporting',
      faIcon: 'fa-user-shield',
      faIconColor: 'text-danger',
      description: [
        'Students can anonymously flag bullying, abuse, or other concerns.',
        'Tickets routed to counselors, safety officers, or district leaders.',
      ],
    },
    {
      name: 'Proctor Mode',
      faIcon: 'fa-laptop-house', // Or fa-lock, fa-shield-alt
      faIconColor: 'text-secondary',
      description: [
        'Temporarily locks devices in a controlled test environment.',
        'URL filtering to approved sites only.',
        'Screen recording for audit trails.',
        'Network lock to a designated Wi-Fi or hotspot.',
      ],
    },
  ];
}
