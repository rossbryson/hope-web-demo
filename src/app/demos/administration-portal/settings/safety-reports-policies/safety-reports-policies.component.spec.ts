import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyReportsPoliciesComponent } from './safety-reports-policies.component';

describe('SafetyReportsPoliciesComponent', () => {
  let component: SafetyReportsPoliciesComponent;
  let fixture: ComponentFixture<SafetyReportsPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyReportsPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyReportsPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
