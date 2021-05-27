import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogoComponent } from './products-catalogo.component';

describe('ProductsCatalogoComponent', () => {
  let component: ProductsCatalogoComponent;
  let fixture: ComponentFixture<ProductsCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
