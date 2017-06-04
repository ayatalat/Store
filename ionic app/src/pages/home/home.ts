import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CategoriesPage } from '../categories/categories';
import { ScanBarCodePage } from '../scan-bar-code/scan-bar-code';
import { CartPage } from "../cart/cart";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showCategories() {
    this.navCtrl.push(CategoriesPage);
  }

  showProfile() {
    this.navCtrl.push(ProfilePage);
  }

  scanBarCode() {
    this.navCtrl.push(ScanBarCodePage);
  }

  showCart() {
    this.navCtrl.push(CartPage);
  }

}
