
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OrderService {
    public orders: any = [];

    orderUrl = "http://localhost:3500/orders";
    constructor(private http: Http) {
        this.getAllOrders();
    }

    getAllOrders() {
        return this.http.get(this.orderUrl).map((response: Response) => response.json())
            .subscribe(data => {
                this.orders = data
            },
            (err) => console.log(`error happened getting todos ${err}`)
            );
    }
    get Orders() {
        return this.orders;
    }



    addorder() {
        var now = new Date();
        var jsonDate = now.toJSON();
        let neworder = {
            "date_added":jsonDate,
            "iduser": 1,
            "status": 1,
            "date_delivered": "2017-05-15 19:43:37 +0100"
        }
        this.http.post(this.orderUrl, neworder).map((response: Response) => response.json())
            .subscribe(
            data => {
                this.orders.push(data);
            },
            (err) => console.log(`errror ${err}`)
            )
    }



}
