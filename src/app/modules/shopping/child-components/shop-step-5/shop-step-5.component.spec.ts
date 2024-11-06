import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep5Component } from './shop-step-5.component';

describe('ShopStep5Component', () => {
  let component: ShopStep5Component;
  let fixture: ComponentFixture<ShopStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
