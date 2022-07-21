import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTutorComponent } from './detalles-tutor.component';

describe('DetallesTutorComponent', () => {
  let component: DetallesTutorComponent;
  let fixture: ComponentFixture<DetallesTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
