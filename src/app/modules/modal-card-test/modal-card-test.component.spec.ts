import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardTestComponent } from './modal-card-test.component';

describe('ModalCardTestComponent', () => {
  let component: ModalCardTestComponent;
  let fixture: ComponentFixture<ModalCardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCardTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
