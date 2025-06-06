import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromebookExtensionComponent } from './chromebook-extension.component';

describe('ChromebookExtensionComponent', () => {
  let component: ChromebookExtensionComponent;
  let fixture: ComponentFixture<ChromebookExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChromebookExtensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromebookExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
