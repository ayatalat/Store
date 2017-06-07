import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderService } from '../../Services/order.service';


@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(private orderservice: OrderService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  confirm() {
     this.orderservice.addorder();
  }
}
