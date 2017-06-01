import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import {RouterModule} from '@angular/router';
 	
import { AppComponent } from './app.component';
import { CatService } from "app/services/catagory.service";

import { CatComponent } from "app/category/category.component";
import { AddCatagory } from "app/category/addcatagory.component";
import { EditCatagory } from "app/category/editcatagory.component";
import { SubCatService } from "app/services/subcatagory.service";
import { ProductService } from 'app/services/product.service';
import { SubCatagory } from "app/category/subcatagory.component";
import { deleteComponent } from "app/category/deletecatagory.component";
import { Product } from './product/product.component';
import { AddProduct } from './product/addproduct.component';
import { editProduct } from './product/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    AddCatagory,
    EditCatagory,
     SubCatagory,
     deleteComponent,
     Product,
    AddProduct,
    editProduct
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot([
      {path:"catagory/list" ,component:CatComponent},
      {path:"catagory/add",component:AddCatagory},
      {path:"catagory/edit/:id",component:EditCatagory},
      {path:"catagory/delete/:id",component:deleteComponent},
      {path:"subcatagory/add/:id",component:SubCatagory},
      {path:"products/list" ,component:Product},
      {path:"products/add" ,component:AddProduct},
      {path:"products/edit/:id" ,component:editProduct}
    ])
  ],
  providers: [CatService,SubCatService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
