import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationPortalComponent } from './administration-portal.component';

describe('AdministrationPortalComponent', () => {
  let component: AdministrationPortalComponent;
  let fixture: ComponentFixture<AdministrationPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
