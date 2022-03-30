import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie5Component } from './smovie5.component';

describe('Smovie5Component', () => {
  let component: Smovie5Component;
  let fixture: ComponentFixture<Smovie5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
