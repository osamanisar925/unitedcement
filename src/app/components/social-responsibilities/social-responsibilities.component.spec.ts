import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialResponsibilitiesComponent } from './social-responsibilities.component';

describe('SocialResponsibilitiesComponent', () => {
  let component: SocialResponsibilitiesComponent;
  let fixture: ComponentFixture<SocialResponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialResponsibilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialResponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
