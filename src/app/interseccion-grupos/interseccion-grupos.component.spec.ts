import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionGruposComponent } from './interseccion-grupos.component';

describe('InterseccionGruposComponent', () => {
  let component: InterseccionGruposComponent;
  let fixture: ComponentFixture<InterseccionGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterseccionGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
