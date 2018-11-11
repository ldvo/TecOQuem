import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEcuacionesComponent } from './inicio-ecuaciones.component';

describe('InicioEcuacionesComponent', () => {
  let component: InicioEcuacionesComponent;
  let fixture: ComponentFixture<InicioEcuacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioEcuacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioEcuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
