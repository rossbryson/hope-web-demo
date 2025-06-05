import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostBenefitComponent } from './cost-benefit.component';

describe('CostBenefitComponent', () => {
  let component: CostBenefitComponent;
  let fixture: ComponentFixture<CostBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostBenefitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
