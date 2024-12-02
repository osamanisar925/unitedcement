import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudizationTrainingComponent } from './saudization-training.component';

describe('SaudizationTrainingComponent', () => {
  let component: SaudizationTrainingComponent;
  let fixture: ComponentFixture<SaudizationTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudizationTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudizationTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
