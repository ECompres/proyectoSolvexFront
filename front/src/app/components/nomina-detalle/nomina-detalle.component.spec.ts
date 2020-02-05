import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaDetalleComponent } from './nomina-detalle.component';

describe('NominaDetalleComponent', () => {
  let component: NominaDetalleComponent;
  let fixture: ComponentFixture<NominaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
