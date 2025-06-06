import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingPoliciesComponent } from './tracking-policies.component';

describe('TrackingPoliciesComponent', () => {
  let component: TrackingPoliciesComponent;
  let fixture: ComponentFixture<TrackingPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
