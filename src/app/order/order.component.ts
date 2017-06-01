import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Http, Response, Request } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

     constructor(private orderser: OrderService, private http: Http, private router: Router) {
    }
    listOrders() {
        return this.orderser.orders;
    }

}
