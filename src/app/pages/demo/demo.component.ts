import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AdministrationPortalComponent } from '../../demos/administration-portal/administration-portal.component';
import { ChromebookExtensionComponent } from '../../demos/chromebook-extension/chromebook-extension.component';
import { ClientPortalComponent } from '../../demos/client-portal/client-portal.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    AdministrationPortalComponent,
    ClientPortalComponent,
    ChromebookExtensionComponent,
  ],
})
export class DemoComponent implements OnInit {
  activeTab: 'admin' | 'client' | 'extension' = 'admin';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (
        fragment === 'client' ||
        fragment === 'extension' ||
        fragment === 'admin'
      ) {
        this.activeTab = fragment;
      } else {
        this.activeTab = 'admin';
      }
    });
  }
}
