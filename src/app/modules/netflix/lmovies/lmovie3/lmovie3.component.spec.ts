import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie3Component } from './lmovie3.component';

describe('Lmovie3Component', () => {
  let component: Lmovie3Component;
  let fixture: ComponentFixture<Lmovie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
