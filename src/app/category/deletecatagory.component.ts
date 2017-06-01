import { Component } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../services/catagory.service';
import { ProductService } from 'app/services/product.service';


@Component({
    selector: 'detele-category',
    templateUrl: './deletecatagory.component.html'
})
export class deleteComponent {
    public catagories: any = [];
    selectedoption: string;
    private sub: any;
    id: number;
    products:any;
    newCategory:any;
    constructor(private http: Http, private productservice: ProductService, private route: ActivatedRoute, private catservice: CatService, private router: Router) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });
    }
    deleteCatagory() {
    // array of product of old category 
    this.products=this.productservice.products.filter((product: any) => product.cat_id === this.id);
    // get id of new category
    this.newCategory=this.catservice.catagories.filter((catagory:any)=>catagory.name ==this.selectedoption);
    
    }
    ListCategory() {
        return this.catservice.categories;
    }
    onChange(newValue) {
        console.log(newValue);
        this.selectedoption = newValue;
        console.log(newValue);
    }

}
