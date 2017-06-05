import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsListPage } from '../products-list/products-list';

import { Http } from '@angular/http';
import { CatService } from "../../Services/catagory.service";

@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategoryPage {

  constructor(private catservice: CatService, private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoryPage');
  }

  showProductsList() {
    this.navCtrl.push(ProductsListPage);
  }

}
