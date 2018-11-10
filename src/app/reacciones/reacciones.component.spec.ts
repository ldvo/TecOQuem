import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaccionesComponent } from './reacciones.component';

describe('ReaccionesComponent', () => {
  let component: ReaccionesComponent;
  let fixture: ComponentFixture<ReaccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
