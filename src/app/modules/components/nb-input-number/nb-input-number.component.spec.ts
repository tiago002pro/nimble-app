import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputNumberComponent } from './nb-input-number.component';

describe('NbInputNumberComponent', () => {
  let component: NbInputNumberComponent;
  let fixture: ComponentFixture<NbInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
