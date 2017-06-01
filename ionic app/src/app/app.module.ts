import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
