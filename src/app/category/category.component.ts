import { Component, OnInit  } from '@angular/core';
import { CatService } from '../services/catagory.service';
import { Http, Response, Request } from '@angular/http';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CatComponent {
    constructor(private catservice: CatService, private loginService: LoginService, private http: Http, private router: Router) {
    }
    ngOnInit(){
        this.loginService.checkCredentials();
    }
    ListCategory() {
        return this.catservice.categories;
    }
   
}
