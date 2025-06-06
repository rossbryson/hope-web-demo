import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdministrationPortalComponent } from '../../demos/administration-portal/administration-portal.component';
import { ChromebookExtensionComponent } from '../../demos/chromebook-extension/chromebook-extension.component';
import { ClientPortalComponent } from '../../demos/client-portal/client-portal.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [
    CommonModule,
    AdministrationPortalComponent,
    ClientPortalComponent,
    ChromebookExtensionComponent,
  ],
})
export class DemoComponent {
  // This property will control which tab is currently visible
  activeTab: 'admin' | 'client' | 'extension' = 'admin';

  constructor() {}

  // A method to change the active tab
  setActiveTab(tab: 'admin' | 'client' | 'extension') {
    this.activeTab = tab;
  }
}
