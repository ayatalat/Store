import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { SubCategoryPage } from "../sub-category/sub-category";
import { ProductsListPage } from '../products-list/products-list';

import { Http } from '@angular/http';
import { CatService } from "../../Services/catagory.service";

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(private catservice: CatService, private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  showSubCategories() {
    this.navCtrl.push(ProductsListPage);
  }

  ListCategory() {
        return this.catservice.categories;
  }

}
