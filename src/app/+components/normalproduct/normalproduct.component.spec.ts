import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalproductComponent } from './normalproduct.component';

describe('NormalproductComponent', () => {
  let component: NormalproductComponent;
  let fixture: ComponentFixture<NormalproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
