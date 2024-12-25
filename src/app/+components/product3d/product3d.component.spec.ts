import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3dComponent } from './product3d.component';

describe('Product3dComponent', () => {
  let component: Product3dComponent;
  let fixture: ComponentFixture<Product3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
