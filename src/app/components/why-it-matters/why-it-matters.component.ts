// src/app/components/why-it-matters/why-it-matters.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
  faIcon: string;
  iconColorClass?: string; // e.g., 'text-success', 'text-info'
}

@Component({
  selector: 'app-why-it-matters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-it-matters.component.html',
  styleUrl: './why-it-matters.component.css',
})
export class WhyItMattersComponent {
  benefits: Benefit[] = [
    {
      title: 'Boosts self-service',
      description:
        'Students handle repairs and attendance from the same extension.',
      faIcon: 'fas fa-rocket',
      iconColorClass: 'text-success',
    },
    {
      title: 'Reduces IT workload',
      description:
        'Automated data capture and diagnostics shrink troubleshooting time.',
      faIcon: 'fas fa-cogs', // or fa-tachometer-alt
      iconColorClass: 'text-info',
    },
    {
      title: 'Enhances safety & compliance',
      description:
        'Real-time alerts, welfare checks, and proctoring keep students protected and schools audit-ready.',
      faIcon: 'fas fa-shield-alt',
      iconColorClass: 'text-danger',
    },
  ];
}
