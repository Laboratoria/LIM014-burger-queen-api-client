import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';


@Component({
  selector: 'app-manage-products-table',
  templateUrl: './manage-products-table.component.html',
  styleUrls: ['./manage-products-table.component.sass']
})
export class ManageProductsTableComponent implements OnInit {
  filterValue: string
  clicked: boolean;
  @Input() products: Array<ProductDetailModel> = []
  @Output() deleteProductById: EventEmitter<any> = new EventEmitter()
  @Output() updatePorductById: EventEmitter<any> = new EventEmitter()
  @Output() createProducts: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.filterValue = ''
    this.clicked = false
  }

  ngOnInit(): void {
  }
  deleteProduct(product: any) {
    this.deleteProductById.emit(product)
    this.clicked = false
  }
  updatePorduct(product: any) {
    this.updatePorductById.emit(product)
    this.clicked = true
  }
  createProduct() {
    this.createProducts.emit()
  }
  handleSearch(value: string) {
    this.filterValue = value
  }

}
