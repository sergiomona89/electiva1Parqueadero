import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroIngresosComponent } from './registro-ingresos.component';

describe('RegistroIngresosComponent', () => {
  let component: RegistroIngresosComponent;
  let fixture: ComponentFixture<RegistroIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
