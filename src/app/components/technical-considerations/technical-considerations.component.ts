import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-considerations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-considerations.component.html',
  styleUrl: './technical-considerations.component.css',
})
export class TechnicalConsiderationsComponent {
  considerations: string[] = [
    'ChromeOS Extension developed in accordance with Google Workspace EDU policies.',
    'Seamless integration with Vivacity’s Dream portal for tracking, diagnostics, and reporting.',
    'Location services subject to hardware availability and permissions.',
    'Scalable backend architecture to support push services and data capture.',
  ];
}
