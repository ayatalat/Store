import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubCategoryPage } from "../sub-category/sub-category";

import { Http } from '@angular/http';
import { CatService } from "../../Services/catagory.service";

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  catid:any;

  constructor(private catservice: CatService, private http: Http,public navCtrl: NavController, public navParams: NavParams) {
   // console.log(navParams);
    console.log(this.catid);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  showSubCategories() {
    this.navCtrl.push(SubCategoryPage, {
    param1:1
  })
  }

  ListCategory() {
        return this.catservice.categories;
  }


}
