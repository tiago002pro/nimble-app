import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbInputCpfcnpjComponent } from './nb-input-cpfcnpj.component';

describe('NbInputCpfcnpjComponent', () => {
  let component: NbInputCpfcnpjComponent;
  let fixture: ComponentFixture<NbInputCpfcnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbInputCpfcnpjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbInputCpfcnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
