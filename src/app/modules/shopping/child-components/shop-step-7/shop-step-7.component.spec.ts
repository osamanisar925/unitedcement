import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep7Component } from './shop-step-7.component';

describe('ShopStep7Component', () => {
  let component: ShopStep7Component;
  let fixture: ComponentFixture<ShopStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
