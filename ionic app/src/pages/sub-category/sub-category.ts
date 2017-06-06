import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsListPage } from '../products-list/products-list';

import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { CatService } from "../../Services/catagory.service";

@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategoryPage {
   private sub:any;
   categoryId:number;
  constructor(private route: ActivatedRoute, private catservice: CatService, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoryPage');
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      console.log(this.categoryId);
    });
  }

  showProductsList() {
    this.navCtrl.push(ProductsListPage);
  }

}
