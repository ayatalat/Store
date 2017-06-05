
import { Injectable } from "@angular/core";
import { Http, Response, Request } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SubCatService {
    todoUrl = " http://localhost:3500/category";
    public catagories: any = [];

    constructor(private http: Http) {

    }
    addSubCatagory(id: number, name: string, descripation: string) {
        if (name != "" && descripation != "") {
            let newsubcatagory = {
                "name": name,
                "id_supcat": id,
                "status": 1,
                "description": descripation
            }
            return this.http.post(this.todoUrl, newsubcatagory).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.catagories = data;


                },
                (err) => console.log(`errror ${err}`)
                )
        }
    }



}
