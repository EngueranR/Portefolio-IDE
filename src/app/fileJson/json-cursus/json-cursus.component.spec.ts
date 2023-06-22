import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCursusComponent } from './json-cursus.component';

describe('JsonCursusComponent', () => {
  let component: JsonCursusComponent;
  let fixture: ComponentFixture<JsonCursusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonCursusComponent]
    });
    fixture = TestBed.createComponent(JsonCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
