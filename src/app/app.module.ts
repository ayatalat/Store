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
import { SubCatagory } from "app/category/subcatagory.component";
import { deleteComponent } from "app/category/deletecatagory.component";

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    AddCatagory,
    EditCatagory,
     SubCatagory,
     deleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot([
      {path:"catagory/list" ,component:CatComponent},
      {path:"catagory/add",component:AddCatagory},
      {path:"catagory/edit/:id",component:EditCatagory},
      {path:"catagory/delete/:id",component:deleteComponent},
      {path:"subcatagory/add/:id",component:SubCatagory}
      
    ])
  ],
  providers: [CatService,SubCatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
