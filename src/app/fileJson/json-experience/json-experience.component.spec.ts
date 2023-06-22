import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonExperienceComponent } from './json-experience.component';

describe('JsonExperienceComponent', () => {
  let component: JsonExperienceComponent;
  let fixture: ComponentFixture<JsonExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonExperienceComponent]
    });
    fixture = TestBed.createComponent(JsonExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
