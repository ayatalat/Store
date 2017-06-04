import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  checkOut() {
    this.navCtrl.push(CheckoutPage);
  }

}
