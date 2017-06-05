import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ProfilePage } from '../profile/profile';
import { CategoriesPage } from '../categories/categories';
import { CartPage } from "../cart/cart";
import { OrderHistoryPage } from "../order-history/order-history";
import { ProductPage } from "../product/product";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  result: {};

  constructor(private barCode:BarcodeScanner,public navCtrl: NavController) {

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

  // scanBarCode() {
  //   this.navCtrl.push(ScanBarCodePage);
  // }

  showHistory() {
    this.navCtrl.push(OrderHistoryPage);
  }

  showCart() {
    this.navCtrl.push(CartPage);
  }

}
