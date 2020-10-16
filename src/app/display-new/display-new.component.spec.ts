import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNewComponent } from './display-new.component';

describe('DisplayNewComponent', () => {
  let component: DisplayNewComponent;
  let fixture: ComponentFixture<DisplayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
