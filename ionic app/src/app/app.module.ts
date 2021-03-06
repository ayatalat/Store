import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { RouterModule } from "@angular/router";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { CatService } from "../Services/catagory.service";
import { OrderService } from "../Services/order.service";
import { ProductService } from "../Services/product.service";
import { SubCatService } from "../Services/subcatagory.service";
import { PassProduct } from "../Services/passProducts.service";
import { UserService } from "../Services/user.service";

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { CategoriesPage } from '../pages/categories/categories';
import { ProductsListPage } from '../pages/products-list/products-list';
import { ProductPage } from '../pages/product/product';
import { EditDataPage } from '../pages/edit-data/edit-data';
import { ScanBarCodePage } from '../pages/scan-bar-code/scan-bar-code';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from "../pages/checkout/checkout";
import { SubCategoryPage } from "../pages/sub-category/sub-category";
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { OrderDetailsPage } from "../pages/order-details/order-details";
import { HeaderComponent } from '../components/header/header';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CategoriesPage,
    ProductsListPage,
    ProductPage,
    EditDataPage,
    ScanBarCodePage,
    CartPage,
    CheckoutPage,
    SubCategoryPage,
    OrderHistoryPage,
    OrderDetailsPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    [HttpModule],
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    RouterModule.forRoot([
      {path:"subcatagory/:id",component:SubCategoryPage}
    ])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CategoriesPage,
    ProductsListPage,
    ProductPage,
    EditDataPage,
    ScanBarCodePage,
    CartPage,
    CheckoutPage,
    SubCategoryPage,
    OrderHistoryPage,
    OrderDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    CatService,
    Geolocation,
    OrderService,
    ProductService,
    SubCatService,
    PassProduct,
    UserService
  ]
})
export class AppModule {}


// json-server store.json -p 3500