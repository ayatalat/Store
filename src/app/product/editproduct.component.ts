import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: '../product/editproduct.component.html',
  styleUrls:['../product/editproduct.component.css']
})
export class editProduct implements OnInit {
    productNameEdit = "";
    productBarcode = "";
    productPrice = "";
    productQuantity = "";
    productImage ="";
    productDescription = "";
    id :any="";
    product:any;
    constructor(private productService: ProductService, private router:Router, private activatedRoute: ActivatedRoute) { 
  }
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.product = this.getProductById();
      });
  }
  getProductById()
  {
      console.log("from method",this.id);
      return this.productService.products.filter((product:any)=>product.id===this.id);
      

  }
  editProduct(id,status :any)
    {
        console.log("from component");
        console.log(this.productNameEdit);
        console.log(id);
        this.productService.editProduct(this.productNameEdit,this.productBarcode,this.productPrice,this.productQuantity,this.productImage,this.productDescription,status,id);
        this.router.navigate(['products/list']); 
    }
}