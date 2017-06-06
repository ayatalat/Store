import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  showProduct() {
    this.navCtrl.push(ProductPage);
  }
  ListProduct() {
        return this.productService.products;
        // console.log("component");
  }

}