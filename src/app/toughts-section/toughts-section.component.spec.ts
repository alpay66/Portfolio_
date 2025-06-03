import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToughtsSectionComponent } from './toughts-section.component';

describe('ToughtsSectionComponent', () => {
  let component: ToughtsSectionComponent;
  let fixture: ComponentFixture<ToughtsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToughtsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToughtsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
