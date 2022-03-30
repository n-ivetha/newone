import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie5Component } from './lmovie5.component';

describe('Lmovie5Component', () => {
  let component: Lmovie5Component;
  let fixture: ComponentFixture<Lmovie5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
