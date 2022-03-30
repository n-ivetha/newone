import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smovie2Component } from './smovie2.component';

describe('Smovie2Component', () => {
  let component: Smovie2Component;
  let fixture: ComponentFixture<Smovie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smovie2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smovie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
