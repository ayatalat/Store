import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { PassProduct } from "../../Services/passProducts.service";
import { Http } from '@angular/http';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  productsArrLength:number = this.passProductService.products.length;

  constructor(public passProductService:PassProduct,public http:Http ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  checkOut() {
    this.navCtrl.push(CheckoutPage);
  }

  Listproducts() {
    return this.passProductService.products;
  }


}
