import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie6Component } from './smovie6.component';

describe('Smovie6Component', () => {
  let component: Smovie6Component;
  let fixture: ComponentFixture<Smovie6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
