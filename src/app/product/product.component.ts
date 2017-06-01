import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service'
@Component({
  selector: 'app-product',
  templateUrl: '../product/product.component.html',
  styleUrls:['../product/product.component.css']
})
export class Product {
    constructor(private productService: ProductService) { 
      this.getProducts();
  }
  getProducts()
  {
    return this.productService.products;
  }
  removeProduct(removeid:any)
  {
    console.log(removeid);
    return this.productService.removeProduct(removeid);
  }
}