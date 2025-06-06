import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPoliciesComponent } from './notification-policies.component';

describe('NotificationPoliciesComponent', () => {
  let component: NotificationPoliciesComponent;
  let fixture: ComponentFixture<NotificationPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
