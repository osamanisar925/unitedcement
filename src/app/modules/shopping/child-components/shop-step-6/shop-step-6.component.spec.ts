import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStep6Component } from './shop-step-6.component';

describe('ShopStep6Component', () => {
  let component: ShopStep6Component;
  let fixture: ComponentFixture<ShopStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStep6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
