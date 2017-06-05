
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class IncreaseCartCount {
    public orders: any = [];
   
    orderUrl = " http://localhost:3500/cart";
    constructor(private http: Http) {
        //  this.increaseCart();
    }

    cartCount:any;

    increaseCart() {
    
        if (!this.cartCount && this.cartCount != 0) {
            this.cartCount = 1;
        }
        else {
            this.cartCount = this.cartCount+1;
        }
  }


}
