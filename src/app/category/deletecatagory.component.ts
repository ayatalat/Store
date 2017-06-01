import { Component } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'detele-category',
    templateUrl: './deletecatagory.component.html'
})
export class deleteComponent {
    constructor(private http: Http, private router: Router) {
    }
   deleteCatagory(){
       //call service to change product 
       
   }
}
