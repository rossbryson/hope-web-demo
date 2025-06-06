import { Routes } from '@angular/router';
import { AdministrationPortalComponent } from './demos/administration-portal/administration-portal.component';
import { HistoryComponent as AdminHistoryComponent } from './demos/administration-portal/history/history.component';
import { SettingsComponent } from './demos/administration-portal/settings/settings.component';
import { ClientPortalComponent } from './demos/client-portal/client-portal.component';
import { HistoryComponent } from './demos/client-portal/history/history.component';
import { CostBenefitComponent } from './pages/cost-benefit/cost-benefit.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';
import { ScopeOfWorkComponent } from './pages/scope-of-work/scope-of-work.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'HOPE - Home' }, // Default route
  { path: 'home', component: HomeComponent, title: 'HOPE - Home' },
  {
    path: 'scope-of-work',
    component: ScopeOfWorkComponent,
    title: 'HOPE - Scope of Work',
  },
  {
    path: 'cost-benefit',
    component: CostBenefitComponent,
    title: 'HOPE - Cost vs Benefit',
  },
  {
    path: 'demo',
    component: DemoComponent,
    title: 'HOPE | Interactive Demo',
    pathMatch: 'full',
  },
  {
    path: 'demo/administration-portal',
    component: AdministrationPortalComponent,
    pathMatch: 'full',
    title: 'HOPE | Admin Portal',
  },
  {
    path: 'demo/administration-portal/settings',
    component: SettingsComponent,
    title: 'HOPE | Admin Settings',
  },
  {
    path: 'demo/administration-portal/history',
    component: AdminHistoryComponent,
    title: 'HOPE | Admin History',
  },
  {
    path: 'demo/client-portal',
    component: ClientPortalComponent,
    title: 'HOPE | Client Portal',
  },
  {
    path: 'demo/client-portal/history',
    component: HistoryComponent,
    title: 'HOPE | Client History',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for a 404 or redirect to home
];
