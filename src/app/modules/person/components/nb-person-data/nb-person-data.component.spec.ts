import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPersonDataComponent } from './nb-person-data.component';

describe('NbPersonDataComponent', () => {
  let component: NbPersonDataComponent;
  let fixture: ComponentFixture<NbPersonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbPersonDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
