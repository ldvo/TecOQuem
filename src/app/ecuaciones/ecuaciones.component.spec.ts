import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesComponent } from './ecuaciones.component';

describe('EcuacionesComponent', () => {
  let component: EcuacionesComponent;
  let fixture: ComponentFixture<EcuacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
