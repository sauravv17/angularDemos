import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: number = 10;
  productStatus: string = 'In Stock';

  constructor() {}

  ngOnInit(): void {}
  getProductStatus() {
    return this.productStatus;
  }
  getColor() {
    return this.productStatus === 'NotInStock' ? 'red' : 'lightgreen';
  }
}
