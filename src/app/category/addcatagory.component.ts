import { Component } from '@angular/core';
import { CatService } from '../services/catagory.service';
import { Http, Response, Request } from '@angular/http';
import {Router} from '@angular/router';


@Component({
    selector: 'category',
    templateUrl: './addcatagory.component.html'
})
export class AddCatagory {
    name: string = '';
    description: string = '';
    constructor(private catservice: CatService, private http: Http,private router:Router) {
    }
    Addcatagory(name: string, description: string) {
        this.catservice.addCatagory(name, description);
       this.router.navigate(['/catagory/list']);
    }
}
