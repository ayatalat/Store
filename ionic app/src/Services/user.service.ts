import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

    public users: any = [];

    title:string;
    quantity:number;
    price:number;
    description:string;
   
    userUrl = " http://localhost:3500/user";
    constructor(private http: Http) {
        this.listProducts();
    }

    listProducts() {
        return this.http.get(this.userUrl).map((response: Response) => response.json())
            .subscribe(data => {
                this.users = data
            },
            err => console.log(`error happened getting todos ${err}`)
            );
  }
  get categories() {
        return this.users;
    }

    addProduct(userName: string,email:string,mobile:number, country: string,city:string,state:string,password:string) {
        if (userName != "" && email != "" && country != "" && city != "" && state != "" && password != "" && mobile !=NaN) {
            let newUser = {
                
                "userName": userName,
                "email": email,
                "mobile": mobile,
                "country": country,
                "city":city,
                "state":state,
                "password":password
            }
             this.http.post(this.userUrl, newUser).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.users.push(data);

                },
                (err) => console.log(`errror ${err}`)
                )
        }
    }


}