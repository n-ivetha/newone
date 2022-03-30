import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetfixmainComponent } from './netfixmain.component';

describe('NetfixmainComponent', () => {
  let component: NetfixmainComponent;
  let fixture: ComponentFixture<NetfixmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetfixmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetfixmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
