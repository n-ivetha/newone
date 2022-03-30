import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie4Component } from './smovie4.component';

describe('Smovie4Component', () => {
  let component: Smovie4Component;
  let fixture: ComponentFixture<Smovie4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
