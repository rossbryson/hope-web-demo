// src/app/components/next-steps/next-steps.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NextStep {
  title: string;
  description: string;
  faIcon: string;
  iconColorClass: string;
  status?: 'Pending' | 'In Progress' | 'Complete'; // Optional status
}

@Component({
  selector: 'app-next-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.css',
})
export class NextStepsComponent {
  steps: NextStep[] = [
    {
      title: 'Internal Approval',
      description:
        'Greenlight the concept and allocate initial planning resources.',
      faIcon: 'fas fa-thumbs-up',
      iconColorClass: 'text-secondary',
    },
    {
      title: 'Discovery & Planning',
      description: 'Identify technical and compliance constraints.',
      faIcon: 'fas fa-search',
      iconColorClass: 'text-secondary',
    },
    {
      title: 'MVP Build',
      description:
        'Develop core features (ticketing, diagnostics, attendance).',
      faIcon: 'fas fa-hammer',
      iconColorClass: 'text-secondary',
    },
    {
      title: 'Pilot Deployment',
      description: 'Trial with key partner schools.',
      faIcon: 'fas fa-rocket',
      iconColorClass: 'text-secondary',
    },
    {
      title: 'Full Rollout & Marketing',
      description: 'Launch campaign and support packages.',
      faIcon: 'fas fa-bullhorn',
      iconColorClass: 'text-secondary',
    },
  ];
}
