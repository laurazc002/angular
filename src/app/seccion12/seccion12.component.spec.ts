import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion12Component } from './seccion12.component';

describe('Seccion12Component', () => {
  let component: Seccion12Component;
  let fixture: ComponentFixture<Seccion12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
