import { Routes } from '@angular/router';
import { CostBenefitComponent } from './pages/cost-benefit/cost-benefit.component';
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
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for a 404 or redirect to home
];
