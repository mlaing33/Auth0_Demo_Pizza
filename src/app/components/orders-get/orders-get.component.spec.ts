import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersGetComponent } from './orders-get.component';

describe('OrdersGetComponent', () => {
  let component: OrdersGetComponent;
  let fixture: ComponentFixture<OrdersGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
