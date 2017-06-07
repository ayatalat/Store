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

  cat_id:number;
  cat_name:string;

  constructor(private catservice: CatService, private http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.cat_id=navParams.get("categoryId");
    this.cat_name = navParams.get("categotyName");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoryPage');
  }

  showProductsList($event,catagoryId,catagoryName) {
    this.navCtrl.push(ProductsListPage,{
      "categoryId":catagoryId,
      "categoryName":catagoryName
    })
    console.log(catagoryId);
  }

  ListCategory() {
        return this.catservice.categories;
  }

}
