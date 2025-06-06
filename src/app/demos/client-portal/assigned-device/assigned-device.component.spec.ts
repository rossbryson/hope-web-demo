import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDeviceComponent } from './assigned-device.component';

describe('AssignedDeviceComponent', () => {
  let component: AssignedDeviceComponent;
  let fixture: ComponentFixture<AssignedDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
