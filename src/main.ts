import { bootstrapApplication } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Register all Chart.js components (controllers, elements, scales, plugins)
Chart.register(...registerables);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
