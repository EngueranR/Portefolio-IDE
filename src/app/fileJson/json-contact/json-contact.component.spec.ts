import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonContactComponent } from './json-contact.component';

describe('JsonContactComponent', () => {
  let component: JsonContactComponent;
  let fixture: ComponentFixture<JsonContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonContactComponent]
    });
    fixture = TestBed.createComponent(JsonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
