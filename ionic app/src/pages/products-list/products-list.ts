import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  cat_id:number;
  cat_name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductService) {
    this.cat_id=navParams.get("categoryId");
    this.cat_name = navParams.get("categoryName");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  showProduct($event,productId,productName) {
    this.navCtrl.push(ProductPage,{
      "productId":productId,
      "productName":productName
    })
  }

  ListProduct() {
      return this.productService.products;
  }

}