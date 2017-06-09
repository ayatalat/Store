import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-product',
  templateUrl: '../product/product.component.html',
  styleUrls:['../product/product.component.css']
})
export class Product {
    constructor(private productService: ProductService, private loginService: LoginService) { 
      this.getProducts();
  }
  ngOnInit(){
        this.loginService.checkCredentials();
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