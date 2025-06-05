import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyItMattersComponent } from './why-it-matters.component';

describe('WhyItMattersComponent', () => {
  let component: WhyItMattersComponent;
  let fixture: ComponentFixture<WhyItMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyItMattersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyItMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
