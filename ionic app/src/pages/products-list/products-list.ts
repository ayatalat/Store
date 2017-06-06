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

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductService) {
    this.cat_id=navParams.get("param");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  showProduct($event,productId) {
    this.navCtrl.push(ProductPage,{
      "param":productId
    })
  }

  ListProduct() {
      return this.productService.products;
  }

}