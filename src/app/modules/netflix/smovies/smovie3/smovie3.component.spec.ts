import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie3Component } from './smovie3.component';

describe('Smovie3Component', () => {
  let component: Smovie3Component;
  let fixture: ComponentFixture<Smovie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
