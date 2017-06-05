import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";

@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoryPage');
  }

  showOrderDetails() {
    this.navCtrl.push(OrderDetailsPage);
  }

}
