import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputPhoneComponent } from './nb-input-phone.component';

describe('NbInputPhoneComponent', () => {
  let component: NbInputPhoneComponent;
  let fixture: ComponentFixture<NbInputPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
