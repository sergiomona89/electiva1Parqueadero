import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosZonasComponent } from './registros-zonas.component';

describe('RegistrosZonasComponent', () => {
  let component: RegistrosZonasComponent;
  let fixture: ComponentFixture<RegistrosZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosZonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
