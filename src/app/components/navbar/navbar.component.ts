import { CommonModule } from '@angular/common'; // For ngIf if you use it
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Import RouterLink and RouterLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Add RouterLink and RouterLinkActive
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  appName = 'HOPE';
  appSubtitle = 'Dream Device Companion';
  isNavbarCollapsed = true; // For toggler
}
