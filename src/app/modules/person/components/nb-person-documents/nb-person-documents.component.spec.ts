import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPersonDocumentsComponent } from './nb-person-documents.component';

describe('NbPersonDocumentsComponent', () => {
  let component: NbPersonDocumentsComponent;
  let fixture: ComponentFixture<NbPersonDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbPersonDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPersonDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
