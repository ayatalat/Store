import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CatService } from '../services/catagory.service';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: '../product/addproduct.component.html',
  styleUrls: ['../product/addproduct.component.css']
})
export class AddProduct {
  productName = "";
  productBarcode = "";
  productPrice = "";
  productQuantity = "";
  productImage = "";
  productDescription = "";
  selectedoption = "";
  Category:any;
  constructor(private catservice: CatService, private loginService: LoginService, private productService: ProductService, private router: Router) {

  }
  ngOnInit(){
        this.loginService.checkCredentials();
    }
  onChange(newValue) {
    console.log(newValue);
    this.selectedoption = newValue;
    console.log(newValue);
  }
  addProduct() {
    if (this.productName != "") {
      console.log("in component");
      console.log(this.productName);
      this.Category = this.catservice.catagories.filter((catagory: any) => catagory.name == this.selectedoption);

      this.productService.addProduct(this.productName, this.productBarcode, this.productPrice, this.productQuantity, this.productDescription,this.Category.id);
      this.router.navigate(['products/list']);
    }
  }
  ListCategory() {
    return this.catservice.categories;
  }
}