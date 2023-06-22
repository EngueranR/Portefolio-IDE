import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWindowComponent } from './nav-window.component';

describe('NavWindowComponent', () => {
  let component: NavWindowComponent;
  let fixture: ComponentFixture<NavWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavWindowComponent]
    });
    fixture = TestBed.createComponent(NavWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
