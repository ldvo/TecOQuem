import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesHostComponent } from './ecuaciones-host.component';

describe('EcuacionesHostComponent', () => {
  let component: EcuacionesHostComponent;
  let fixture: ComponentFixture<EcuacionesHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuacionesHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
