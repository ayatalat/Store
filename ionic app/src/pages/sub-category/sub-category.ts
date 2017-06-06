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

  constructor(private catservice: CatService, private http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.cat_id=navParams.get("param");
    console.log(this.cat_id)
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoryPage');
  }

  showProductsList($event,catagoryId) {
    this.navCtrl.push(ProductsListPage,{
      "param":catagoryId
    })
    console.log(catagoryId);
  }

  ListCategory() {
        return this.catservice.categories;
  }

}
