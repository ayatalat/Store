import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IncreaseCartCount } from "../../Services/increaseCartCount.service";
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { CartPage } from "../../pages/cart/cart";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input('myTitle') myTitle;
  text:String;

  constructor(public increaseCartCount:IncreaseCartCount,public http:Http ,public navCtrl: NavController) {
    
  }

  increaseCount() {
    
    this.increaseCartCount.increaseCart();
    console.log(this.increaseCartCount.cartCount);
  }

  showCartPage() {
    this.navCtrl.push(CartPage);
  }

  ngAfterViewInit() {
    this.text = this.myTitle;
  }

}
