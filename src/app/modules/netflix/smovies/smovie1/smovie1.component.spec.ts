import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie1Component } from './smovie1.component';

describe('Smovie1Component', () => {
  let component: Smovie1Component;
  let fixture: ComponentFixture<Smovie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
