import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalConsiderationsComponent } from './technical-considerations.component';

describe('TechnicalConsiderationsComponent', () => {
  let component: TechnicalConsiderationsComponent;
  let fixture: ComponentFixture<TechnicalConsiderationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalConsiderationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalConsiderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
