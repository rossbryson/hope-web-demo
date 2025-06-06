import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctorModePoliciesComponent } from './proctor-mode-policies.component';

describe('ProctorModePoliciesComponent', () => {
  let component: ProctorModePoliciesComponent;
  let fixture: ComponentFixture<ProctorModePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProctorModePoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProctorModePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
