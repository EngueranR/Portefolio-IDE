import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSkillComponent } from './json-skill.component';

describe('JsonSkillComponent', () => {
  let component: JsonSkillComponent;
  let fixture: ComponentFixture<JsonSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonSkillComponent]
    });
    fixture = TestBed.createComponent(JsonSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
