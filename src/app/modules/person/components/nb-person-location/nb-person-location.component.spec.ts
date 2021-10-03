import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPersonLocationComponent } from './nb-person-location.component';

describe('NbPersonLocationComponent', () => {
  let component: NbPersonLocationComponent;
  let fixture: ComponentFixture<NbPersonLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbPersonLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPersonLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
