import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep1Component } from './shop-step-1.component';

describe('ShopStep1Component', () => {
  let component: ShopStep1Component;
  let fixture: ComponentFixture<ShopStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
