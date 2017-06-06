import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, Request } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/map";
@Injectable()
export class LoginService {

    public users: any = [];
    public adminUser: any;
    public adminId = 1;
    loginUrl = " http://localhost:3500/users";
    constructor(private http: Http) {

    }

    getAdmin() {

        this.http.get(`${this.loginUrl}/${this.adminId}`).map((response: Response) => response.json())
            .subscribe(data => {
                this.adminUser= data;
               
             console.log(`the data ${this.adminUser.email}`);
            },
            err => console.log(`error happened getting users ${err}`)
            );
    };
    

    
    Authentcate()
    {

    }
    
    }
    