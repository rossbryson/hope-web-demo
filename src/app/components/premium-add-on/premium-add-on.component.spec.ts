import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAddOnComponent } from './premium-add-on.component';

describe('PremiumAddOnComponent', () => {
  let component: PremiumAddOnComponent;
  let fixture: ComponentFixture<PremiumAddOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumAddOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumAddOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
