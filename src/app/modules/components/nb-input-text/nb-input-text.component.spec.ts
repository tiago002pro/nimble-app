import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputTextComponent } from './nb-input-text.component';

describe('NbInputTextComponent', () => {
  let component: NbInputTextComponent;
  let fixture: ComponentFixture<NbInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
