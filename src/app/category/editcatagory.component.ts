import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/catagory.service';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';



@Component({
    selector: 'category',
    templateUrl: './editcatagory.component.html'
})
export class EditCatagory {

    private sub: any;
    id: number;
    public catagory: any[];

    constructor(private catservice: CatService, private http: Http, private router: ActivatedRoute,private route:Router) {
    }
    ngOnInit() {
        this.sub = this.router.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });
    }
    getCatagoryById() {
        return this.catservice.catagories.filter((catagory: any) => catagory.id == this.id);

    }
    EditCatagory(name, desc: string) {
        console.log("from ser" + name);
        console.log("from ser" + desc);
        this.catservice.EditCatagory(this.id, name, desc);
        this.route.navigate(['/catagory/list'])

    }
   
  

}