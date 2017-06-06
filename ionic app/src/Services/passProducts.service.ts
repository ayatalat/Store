import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class PassProduct {

    public products: any = [];

    title:string;
    quantity:number;
    price:number;
    description:string;
   
    productUrl = " http://localhost:3500/passproduct";
    constructor(private http: Http) {
        this.listProducts();
    }

    listProducts() {
        return this.http.get(this.productUrl).map((response: Response) => response.json())
            .subscribe(data => {
                this.products = data
            },
            err => console.log(`error happened getting todos ${err}`)
            );
  }
  get categories() {
        return this.products;
    }

    addProduct(title: string,quantity:number,price:number, descripation: string) {
        if (title != "" && descripation != "" && price !=NaN && quantity != NaN) {
            let newproduct = {
                
                "title": title,
                "quantity": quantity,
                "price": price,
                "description": descripation
            }
             this.http.post(this.productUrl, newproduct).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.products.push(data);

                },
                (err) => console.log(`errror ${err}`)
                )
        }
    }


}