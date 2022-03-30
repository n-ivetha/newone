import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie8Component } from './lmovie8.component';

describe('Lmovie8Component', () => {
  let component: Lmovie8Component;
  let fixture: ComponentFixture<Lmovie8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
