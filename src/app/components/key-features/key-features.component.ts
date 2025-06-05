import { CommonModule } from '@angular/common'; // Required for *ngFor
import { Component } from '@angular/core';

interface Feature {
  name: string;
  description: string[];
}

interface FeatureCategory {
  title: string;
  features: Feature[];
  note?: string;
}

@Component({
  selector: 'app-key-features',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.css',
})
export class KeyFeaturesComponent {
  freeTier: FeatureCategory = {
    title: 'Free Tier',
    note: 'Included for every customer—no extra charge.',
    features: [
      {
        name: 'Repair Ticket Management',
        description: [
          'Students can open, view, and track tickets from their device.',
          'Help-desk staff chat directly with device holders, providing drop-off instructions.',
          'One-click escalation hand-off to Vivacity’s core ticketing platform.',
        ],
      },
      {
        name: 'Device Diagnostics',
        description: [
          'Background collection of health metrics, error logs, and hardware stats.',
          'Admins and techs can inspect live telemetry for faster troubleshooting.',
        ],
      },
    ],
  };
}
