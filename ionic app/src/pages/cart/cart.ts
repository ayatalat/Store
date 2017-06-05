import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { IncreaseCartCount } from "../../Services/increaseCartCount.service";
import { Http } from '@angular/http';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  // cartCount:any;

  constructor(public increaseCartCount:IncreaseCartCount,public http:Http ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  checkOut() {
    this.navCtrl.push(CheckoutPage);
  }

  increaseCount() {
    
    this.increaseCartCount.increaseCart();
    console.log(this.increaseCartCount.cartCount);
  }


}
