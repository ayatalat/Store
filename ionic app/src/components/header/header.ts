import { Component,Input} from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { CartPage } from "../../pages/cart/cart";
import { PassProduct } from "../../Services/passProducts.service";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  // productsArrLength:number = this.passProductService.products.length;
  productsArrLength:number;

  @Input('myTitle') myTitle;
  text:String;

  constructor(public passProductService:PassProduct,public http:Http ,public navCtrl: NavController) {
  }

  checkArrLength() {
    if(this.passProductService.products.length ==0) {
      !this.productsArrLength;
    } else {
      this.productsArrLength = this.passProductService.products.length;
    }
    return this.productsArrLength;
  }

  showCartPage() {
    this.navCtrl.push(CartPage);
  }

  ngAfterViewInit() {
    this.text = this.myTitle;
  }

}
