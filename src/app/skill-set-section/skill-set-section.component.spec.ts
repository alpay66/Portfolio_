import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetSectionComponent } from './skill-set-section.component';

describe('SkillSetSectionComponent', () => {
  let component: SkillSetSectionComponent;
  let fixture: ComponentFixture<SkillSetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSetSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
