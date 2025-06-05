// src/app/components/monetization-strategy/monetization-strategy.component.ts
import { CommonModule } from '@angular/common'; // Import NgClass
import { Component } from '@angular/core';

interface StrategyPoint {
  title: string;
  description: string;
  faIcon: string;
  iconColorClass: string;
}

@Component({
  selector: 'app-monetization-strategy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monetization-strategy.component.html',
  styleUrl: './monetization-strategy.component.css',
})
export class MonetizationStrategyComponent {
  strategies: StrategyPoint[] = [
    {
      title: 'Free Features',
      description: 'Increase overall customer satisfaction and retention.',
      faIcon: 'fas fa-gift',
      iconColorClass: 'text-success',
    },
    {
      title: 'Paid Tier',
      description:
        'Offered as a subscription per-device license (annual/monthly).',
      faIcon: 'fas fa-gem',
      iconColorClass: 'text-primary',
    },
    {
      title: 'Bulk Licenses',
      description:
        'Opportunity for bulk license agreements with school districts.',
      faIcon: 'fas fa-handshake',
      iconColorClass: 'text-info',
    },
  ];
}
