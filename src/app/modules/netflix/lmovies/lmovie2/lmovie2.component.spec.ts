import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lmovie2Component } from './lmovie2.component';

describe('Lmovie2Component', () => {
  let component: Lmovie2Component;
  let fixture: ComponentFixture<Lmovie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lmovie2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lmovie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
