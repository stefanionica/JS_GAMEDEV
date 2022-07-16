import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X0Component } from './x0.component';

describe('X0Component', () => {
  let component: X0Component;
  let fixture: ComponentFixture<X0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
