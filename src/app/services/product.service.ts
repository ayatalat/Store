import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Http, Response, Request } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    public products: any = [];
    storeUrl = "http://localhost:3500/products";
    constructor(private http: Http) {
        this.getProducts();
    }
    getProducts(all: boolean = false) {
        return this.http.get(this.storeUrl).map((response: Response) => response.json())
            .subscribe(data => {
                this.products = data
                console.log(`the data ${data}`);
            },
            err => console.log(`error happened getting products ${err}`)
            );
    };

    // addProduct(productname,productbarcode,productprice,productquantity,productimage,productdescription:any)
    addProduct(productname, productbarcode, productprice, productquantity, productdescription, catid: any) {
        console.log("in service");
        console.log(productname);
        if (productname != "") {
            let body = {
                "name": productname,
                "barcode": productbarcode,
                "price": productprice,
                "quantity": productquantity,
                "descripation": productdescription,
                "image": "image",
                "cat_id": catid,
                "status": 1
            }
            this.http.post(this.storeUrl, body).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.products.push(data);
                },
                (err) => console.log(`errror ${err}`)
                )
        } else
            console.log("error");
        console.log(productname);
    };
    removeProduct(removeid: any) {
        console.log(removeid);
        this.products = this.products.filter((product: any) => product.id != removeid)
    };

    editProduct(productNameEdit, productBarcodeEdit, productPriceEdit, productQuantityEdit, productImageEdit, productDescriptionEdit, id, status: any) {
        console.log("in service");
        console.log(productNameEdit)
        if (productNameEdit != "") {
            let body = {
                "id": id,
                "name": productNameEdit,
                "barcode": productBarcodeEdit,
                "price": productPriceEdit,
                "Quantity": productQuantityEdit,
                "descripation": productDescriptionEdit,
                "image": productImageEdit,
                "status": status,
                "cat_id":2

            }
            this.http.put(this.storeUrl + "/" + id, body).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.products.push(data);
                },
                (err) => console.log(`errror ${err}`)
                )
        } else
            console.log("error");
    };

}