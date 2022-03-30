import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie1Component } from './lmovie1.component';

describe('Lmovie1Component', () => {
  let component: Lmovie1Component;
  let fixture: ComponentFixture<Lmovie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
