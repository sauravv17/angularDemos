import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allowNewProduct = true;
  productCreationStatus = 'No Products ';
  productName = '';
  productDescription = 'Default';
  username = '';

  constructor() {}

  ngOnInit(): void {}
  onProductCreate() {
    this.productCreationStatus = 'Product Added';
  }
  ongetProductName(event: any) {
    this.productName = event.target.value;
  }
  onUser() {
    this.username = '';
  }
}
