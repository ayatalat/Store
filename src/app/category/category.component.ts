import { Component } from '@angular/core';
import { CatService } from '../services/catagory.service';
import { Http, Response, Request } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CatComponent {
    constructor(private catservice: CatService, private http: Http, private router: Router) {
    }
    ListCategory() {
        return this.catservice.categories;
    }
   
}
