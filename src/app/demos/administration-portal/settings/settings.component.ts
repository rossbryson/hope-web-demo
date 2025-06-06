// src/app/demos/administration-portal/settings/settings.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Import all the child policy components
import { AttendancePoliciesComponent } from './attendance-policies/attendance-policies.component';
import { NotificationPoliciesComponent } from './notification-policies/notification-policies.component';
import { ProctorModePoliciesComponent } from './proctor-mode-policies/proctor-mode-policies.component';
import { SafetyReportsPoliciesComponent } from './safety-reports-policies/safety-reports-policies.component';
import { TrackingPoliciesComponent } from './tracking-policies/tracking-policies.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterModule,
    TrackingPoliciesComponent,
    AttendancePoliciesComponent,
    SafetyReportsPoliciesComponent,
    NotificationPoliciesComponent,
    ProctorModePoliciesComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {}
