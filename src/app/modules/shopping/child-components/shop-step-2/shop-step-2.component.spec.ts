import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep2Component } from './shop-step-2.component';

describe('ShopStep2Component', () => {
  let component: ShopStep2Component;
  let fixture: ComponentFixture<ShopStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
