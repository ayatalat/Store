import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ProfilePage } from '../profile/profile';
import { CategoriesPage } from '../categories/categories';
import { CartPage } from "../cart/cart";
import { OrderHistoryPage } from "../order-history/order-history";
import { ProductPage } from "../product/product";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_email:string;
  options: BarcodeScannerOptions;
  result: {};

  constructor(private storage: Storage,private barCode:BarcodeScanner,public navCtrl: NavController,public navParams:NavParams) {
    this.user_email=navParams.get("user_email");
    storage.get('email').then((val) => {
    console.log(val);
  });
  }

  async scanBarCode() {

    this.options = {
      prompt: 'Scan the bar code to see the result'
    }

    this.result = await this.barCode.scan(this.options);
    console.log(this.result);

    this.navCtrl.push(ProductPage);
  }

  showCategories() {
    this.navCtrl.push(CategoriesPage);
  }

  showProfile() {
    this.navCtrl.push(ProfilePage);
  }

  showHistory() {
    this.navCtrl.push(OrderHistoryPage);
  }

  showCart() {
    this.navCtrl.push(CartPage);
  }

}
