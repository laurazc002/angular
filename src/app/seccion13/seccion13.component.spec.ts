import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion13Component } from './seccion13.component';

describe('Seccion13Component', () => {
  let component: Seccion13Component;
  let fixture: ComponentFixture<Seccion13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
