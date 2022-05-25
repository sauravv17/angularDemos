import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Laptop',
      stock: 200,
      availability: 'In Stock',
    },
    {
      name: 'Phone',
      stock: 100,
      availability: 'In Stock',
    },
    // {
    //   name: 'Keyboard',
    //   stock: 50,
    //   availability: 'In Stock',
    // },
    // {
    //   name: 'HeadPhones',
    //   stock: 150,
    //   availability: 'In Stock',
    // },
  ];
  // constructor() {}

  // ngOnInit(): void {}

  onProductAdded(data) {
    this.products.push({
      name: data.productName,
      stock: data.stock,
      availability: data.productAvailability,
    });
  }
}
