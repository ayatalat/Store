import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CartPage } from "../cart/cart";

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addToCart () {
    this.navCtrl.push(CartPage);
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Product is added to cart correctlly',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
