
import { Injectable } from "@angular/core";
import { Http, Response, Request } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CatService {
    public catagories: any = [];
    name:string;
    description:string;
    catUrl = " http://localhost:3000/category";
    constructor(private http: Http) {
        this.getAllCat();
    }

    getAllCat() {
        return this.http.get(this.catUrl).map((response: Response) => response.json())
            .subscribe(data => {
                this.catagories = data
            },
            err => console.log(`error happened getting categories ${err}`)
            );
    }
    get categories() {
        return this.catagories;
    }
    addCatagory(name: string, descripation: string) {
        if (name != "" && descripation != "") {
            let newcatagory = {
                "name": name,
                "id_supcat": "NULL",
                "status": 1,
                "description": descripation
            }
             this.http.post(this.catUrl, newcatagory).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.catagories.push(data);
                    name = '';
                    descripation = '';

                },
                (err) => console.log(`errror ${err}`)
                )
        }
    }
     EditCatagory(id:number,name:string,desc:string) {
        if (desc!= "" && name != "") {
            let newcatagory = {
                "name":name,
                "id_supcat":null,
                "description":desc,
                "status": 1,

            }
            console.log(newcatagory);
            this.http.put(this.catUrl+"/"+id, newcatagory).map((response: Response) => response.json())
                .subscribe(
                data => {
                    this.catagories.push(data);
                },
                (err) => console.log(`errror ${err}`)
                )
        }
    }
    // deleteCatagory(id:number){
    //     this.http.delete(this.catUrl+"/"+id).map((response:Response)=>response.json())
    //     .subscribe(
    //         data =>{
    //             this.catagories=data
    //         },
    //         (err)=> console.log(`error ${err}`)
    //     )
    // }


}
