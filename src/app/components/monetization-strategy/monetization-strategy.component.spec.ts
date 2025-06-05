import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetizationStrategyComponent } from './monetization-strategy.component';

describe('MonetizationStrategyComponent', () => {
  let component: MonetizationStrategyComponent;
  let fixture: ComponentFixture<MonetizationStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonetizationStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonetizationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
