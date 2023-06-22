import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFileLeftComponent } from './nav-file-left.component';

describe('NavFileLeftComponent', () => {
  let component: NavFileLeftComponent;
  let fixture: ComponentFixture<NavFileLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavFileLeftComponent]
    });
    fixture = TestBed.createComponent(NavFileLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
