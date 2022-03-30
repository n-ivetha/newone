import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie7Component } from './smovie7.component';

describe('Smovie7Component', () => {
  let component: Smovie7Component;
  let fixture: ComponentFixture<Smovie7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
