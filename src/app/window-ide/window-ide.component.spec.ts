import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowIdeComponent } from './window-ide.component';

describe('WindowIdeComponent', () => {
  let component: WindowIdeComponent;
  let fixture: ComponentFixture<WindowIdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowIdeComponent]
    });
    fixture = TestBed.createComponent(WindowIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
