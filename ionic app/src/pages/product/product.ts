import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CartPage } from "../cart/cart";
import { IncreaseCartCount } from "../../Services/increaseCartCount.service";
import { Http } from '@angular/http';
import { PassProduct } from "../../Services/passProducts.service";

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  title:string = "product";
  quantity:number = 2;
  price:number = 200;
  description = "description";

  constructor(public passProductService:PassProduct, public increaseCartCount:IncreaseCartCount,public http:Http ,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
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
  this.passProductService.addProduct(this.title,this.quantity,this.price,this.description);
  this.increaseCartCount.increaseCart();
}

}
