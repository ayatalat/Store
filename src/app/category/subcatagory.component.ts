import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { SubCatService } from "app/services/subcatagory.service";

@Component({
    selector: 'subcategory',
    templateUrl: './subcatagory.component.html'
})
export class    SubCatagory {
    private sub: any;
    id: number;
     constructor(private router:ActivatedRoute,private route :Router,private subcatagoryservice: SubCatService) { }
    ngOnInit(){
        this.sub = this.router.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });
    }
   Addsubcatagory(name: string, description: string){
        this.subcatagoryservice.addSubCatagory(this.id,name,description);
               this.route.navigate(['/catagory/list']);

   }
}