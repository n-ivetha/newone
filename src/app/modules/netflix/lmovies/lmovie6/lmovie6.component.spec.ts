import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie6Component } from './lmovie6.component';

describe('Lmovie6Component', () => {
  let component: Lmovie6Component;
  let fixture: ComponentFixture<Lmovie6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
