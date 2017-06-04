import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

// import { Http } from '@angular/http';
// import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  showProduct() {
    this.navCtrl.push(ProductPage);
  }

}