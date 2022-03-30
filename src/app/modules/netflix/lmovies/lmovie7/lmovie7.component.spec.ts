import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie7Component } from './lmovie7.component';

describe('Lmovie7Component', () => {
  let component: Lmovie7Component;
  let fixture: ComponentFixture<Lmovie7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
