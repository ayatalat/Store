import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Http, Response, Request } from '@angular/http';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

     constructor(private orderser: OrderService, private loginService: LoginService, private http: Http, private router: Router) {
    }
    ngOnInit(){
        this.loginService.checkCredentials();
    }
    listOrders() {
        return this.orderser.orders;
    }

}
