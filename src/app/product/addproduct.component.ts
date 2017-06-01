import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: '../product/addproduct.component.html',
  styleUrls:['../product/addproduct.component.css']
})
export class AddProduct {
    productName = "";
    producBarcode = "";
    productPrice = "";
    productQuantity = "";
    productImage = "";
    productDescription = "";
    constructor(private productService: ProductService, private router:Router) { 

  }
  addProduct()
    {
        if (this.productName != "" )
       {
         console.log("in component");
         console.log(this.productName);
        this.productService.addProduct(this.productName,this.producBarcode,this.productPrice,this.productQuantity,this.productImage,this.productDescription);
        this.router.navigate(['products/list']); 
     }
  }
}