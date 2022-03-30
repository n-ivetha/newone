import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie4Component } from './lmovie4.component';

describe('Lmovie4Component', () => {
  let component: Lmovie4Component;
  let fixture: ComponentFixture<Lmovie4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
