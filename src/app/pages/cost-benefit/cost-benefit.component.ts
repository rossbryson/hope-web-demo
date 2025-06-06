import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cost-benefit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseChartDirective],
  templateUrl: './cost-benefit.component.html',
  styleUrl: './cost-benefit.component.css',
})
export class CostBenefitComponent implements OnInit, OnDestroy {
  costBenefitForm!: FormGroup;
  private formChangesSubscription!: Subscription;
  public canDisplayChart = false;

  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [DataLabelsPlugin];

  public lineChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Total Revenue',
        borderColor: 'green',
        backgroundColor: 'rgba(0,255,0,0.1)',
        fill: 'origin',
        tension: 0.3,
        pointBackgroundColor: 'green',
        pointRadius: 4,
      },
      {
        data: [],
        label: 'Total Costs',
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.1)',
        fill: 'origin',
        tension: 0.3,
        pointBackgroundColor: 'red',
        pointRadius: 4,
      },
      {
        data: [],
        label: 'Net Profit / Loss',
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.1)',
        fill: 'origin',
        tension: 0.3,
        pointBackgroundColor: 'blue',
        pointRadius: 4,
      },
      {
        data: [],
        label: 'Cumulative Profit / Loss',
        borderColor: 'purple',
        backgroundColor: 'rgba(128,0,128,0.1)',
        type: 'line',
        fill: 'origin',
        tension: 0.3,
        pointBackgroundColor: 'purple',
        pointRadius: 4,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: 'Year' },
      },
      y: {
        title: { display: true, text: 'Amount (USD)' },
        ticks: {
          callback: (value) => {
            if (typeof value === 'number') {
              return '$' + value.toLocaleString();
            }
            return value;
          },
        },
      },
    },
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value, context) => {
          if (context.datasetIndex === 2 || context.datasetIndex === 3) {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              notation: 'compact',
            }).format(value);
          }
          return null;
        },
        color: (context) => context.dataset.borderColor as string,
        font: {
          weight: 'bold',
          size: 10,
        },
        offset: 8,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    animation: {
      duration: 800,
      easing: 'easeInOutQuart',
    },
  };

  projectionYears = 5;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.costBenefitForm = this.fb.group({
      adoptionRate: [
        0.05,
        [Validators.required, Validators.min(0), Validators.max(1)],
      ],
      initialDevices: [1600000, [Validators.required, Validators.min(0)]],
      devicesPerYear: [600000, [Validators.required, Validators.min(0)]],
      costPerLicense: [1.25, [Validators.required, Validators.min(0)]],
      initialDevelopmentCost: [75000, [Validators.required, Validators.min(0)]],
      annualMaintenanceCost: [10000, [Validators.required, Validators.min(0)]],
    });

    if (isPlatformBrowser(this.platformId)) {
      this.canDisplayChart = true;
      this.calculateAndDisplayChart();
      this.formChangesSubscription =
        this.costBenefitForm.valueChanges.subscribe(() => {
          if (this.costBenefitForm.valid) {
            this.calculateAndDisplayChart();
          }
        });
    } else {
      this.lineChartData.labels = Array(this.projectionYears).fill(
        'Loading...'
      );
      this.lineChartData.datasets.forEach((ds) => {
        ds.data = Array(this.projectionYears).fill(0);
      });
      this.canDisplayChart = false;
    }
  }

  calculateAndDisplayChart(): void {
    if (!this.costBenefitForm.valid || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const values = this.costBenefitForm.value;
    const labels: string[] = [];
    const revenueData: number[] = [];
    const costData: number[] = [];
    const netProfitData: number[] = [];
    const cumulativeProfitData: number[] = [];
    let currentCumulativeProfit = 0;

    for (let i = 1; i <= this.projectionYears; i++) {
      labels.push(`Year ${i}`);

      // Calculate total licensable devices for the current year
      // Year 1 uses initialDevices. Subsequent years add devicesPerYear cumulatively.
      const totalLicensableDevices =
        values.initialDevices + values.devicesPerYear * (i - 1); // <-- UPDATED LOGIC

      // Revenue
      const annualRevenue =
        totalLicensableDevices * values.adoptionRate * values.costPerLicense; // <-- UPDATED LOGIC
      revenueData.push(annualRevenue);

      // Costs
      let annualCosts = 0;
      if (i === 1) {
        annualCosts =
          values.initialDevelopmentCost + values.annualMaintenanceCost;
      } else {
        annualCosts = values.annualMaintenanceCost;
      }
      costData.push(annualCosts);

      // Net Profit
      const netProfit = annualRevenue - annualCosts;
      netProfitData.push(netProfit);

      // Cumulative Profit
      currentCumulativeProfit += netProfit;
      cumulativeProfitData.push(currentCumulativeProfit);
    }

    this.lineChartData = {
      labels: labels,
      datasets: [
        { ...this.lineChartData.datasets[0], data: revenueData },
        { ...this.lineChartData.datasets[1], data: costData },
        { ...this.lineChartData.datasets[2], data: netProfitData },
        { ...this.lineChartData.datasets[3], data: cumulativeProfitData },
      ],
    };
  }

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }
}
