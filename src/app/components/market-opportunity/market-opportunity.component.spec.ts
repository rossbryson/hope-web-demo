import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOpportunityComponent } from './market-opportunity.component';

describe('MarketOpportunityComponent', () => {
  let component: MarketOpportunityComponent;
  let fixture: ComponentFixture<MarketOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
