import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRemoveComponent } from './inventory-remove.component';

describe('InventoryRemoveComponent', () => {
  let component: InventoryRemoveComponent;
  let fixture: ComponentFixture<InventoryRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
