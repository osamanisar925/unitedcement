import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep3Component } from './shop-step-3.component';

describe('ShopStep3Component', () => {
  let component: ShopStep3Component;
  let fixture: ComponentFixture<ShopStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
