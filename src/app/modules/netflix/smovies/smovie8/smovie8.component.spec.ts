import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie8Component } from './smovie8.component';

describe('Smovie8Component', () => {
  let component: Smovie8Component;
  let fixture: ComponentFixture<Smovie8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
