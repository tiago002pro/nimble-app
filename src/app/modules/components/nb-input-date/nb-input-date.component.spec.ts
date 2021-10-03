import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputDateComponent } from './nb-input-date.component';

describe('NbInputDateComponent', () => {
  let component: NbInputDateComponent;
  let fixture: ComponentFixture<NbInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
