import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputZipcodeComponent } from './nb-input-zipcode.component';

describe('NbInputZipcodeComponent', () => {
  let component: NbInputZipcodeComponent;
  let fixture: ComponentFixture<NbInputZipcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputZipcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
