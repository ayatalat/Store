import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import {RouterModule} from '@angular/router';
 	
import { AppComponent } from "./app.component";  
import { CatService } from "./services/catagory.service";
import { CatComponent } from "./category/category.component";
import { AddCatagory } from "./category/addcatagory.component";
import { EditCatagory } from "./category/editcatagory.component";
import { SubCatService } from "./services/subcatagory.service";
import { ProductService } from './services/product.service';
import { SubCatagory } from "./category/subcatagory.component";
import { deleteComponent } from "./category/deletecatagory.component";
import { Product } from './product/product.component';
import { AddProduct } from './product/addproduct.component';
import { editProduct } from './product/editproduct.component';
import { OrderComponent } from "./order/order.component";
import { OrderService } from "./services/order.service";
import { AdminComponent } from "./admin Component/admin.component";
import { AuthComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    AddCatagory,
    EditCatagory,
    SubCatagory,
    deleteComponent,
    OrderComponent ,
    Product,
    AddProduct,
    editProduct,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot([
      {path:"home" ,component:Product},
      {path:"catagory/list" ,component:CatComponent},
      {path:"catagory/add",component:AddCatagory},
      {path:"catagory/edit/:id",component:EditCatagory},
      {path:"catagory/delete/:id",component:deleteComponent},
      {path:"subcatagory/add/:id",component:SubCatagory},
      {path:"products/list" ,component:Product},
      {path:"products/add" ,component:AddProduct},
      {path:"products/edit/:id" ,component:editProduct},
      {path: "order/list", component:OrderComponent},
      {path: "login", component: AuthComponent },
      {path: '', component: AdminComponent },
      {path: '**', component: AdminComponent }
    ])
  ],
  providers: [CatService,SubCatService,ProductService,OrderService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
