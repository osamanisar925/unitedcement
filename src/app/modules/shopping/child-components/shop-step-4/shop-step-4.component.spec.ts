import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep4Component } from './shop-step-4.component';

describe('ShopStep4Component', () => {
  let component: ShopStep4Component;
  let fixture: ComponentFixture<ShopStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
