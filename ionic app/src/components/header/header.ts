import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IncreaseCartCount } from "../../Services/increaseCartCount.service";
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { CartPage } from "../../pages/cart/cart";
import { PassProduct } from "../../Services/passProducts.service";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  productsArrLength:number = this.passProductService.products.length;

  @Input('myTitle') myTitle;
  text:String;

  constructor(public passProductService:PassProduct, public increaseCartCount:IncreaseCartCount,public http:Http ,public navCtrl: NavController) {
    
  }

  showCartPage() {
    this.navCtrl.push(CartPage);
  }

  ngAfterViewInit() {
    this.text = this.myTitle;
  }

}
