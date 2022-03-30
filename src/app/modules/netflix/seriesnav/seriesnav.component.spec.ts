import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesnavComponent } from './seriesnav.component';

describe('SeriesnavComponent', () => {
  let component: SeriesnavComponent;
  let fixture: ComponentFixture<SeriesnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
