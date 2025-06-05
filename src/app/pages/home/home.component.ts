import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Import all your section components
import { HeroComponent } from '../../components/hero/hero.component';
import { KeyFeaturesComponent } from '../../components/key-features/key-features.component';
import { MarketOpportunityComponent } from '../../components/market-opportunity/market-opportunity.component';
import { MonetizationStrategyComponent } from '../../components/monetization-strategy/monetization-strategy.component';
import { NextStepsComponent } from '../../components/next-steps/next-steps.component';
import { PremiumAddOnComponent } from '../../components/premium-add-on/premium-add-on.component';
import { TechnicalConsiderationsComponent } from '../../components/technical-considerations/technical-considerations.component';
import { WhyItMattersComponent } from '../../components/why-it-matters/why-it-matters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    KeyFeaturesComponent,
    PremiumAddOnComponent,
    WhyItMattersComponent,
    MarketOpportunityComponent,
    TechnicalConsiderationsComponent,
    MonetizationStrategyComponent,
    NextStepsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
