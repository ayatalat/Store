import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  msg:string="";

  constructor(private storage: Storage,public userService:UserService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginToHome(email,password) {
    for (var i = 0; i < this.userService.users.length ; i++) {
      if(this.userService.users[i].email == email && this.userService.users[i].password == password) {
        this.navCtrl.push(HomePage,{
          "user_email":email
        });
        this.storage.set('email', email);
      }
      else {
        this.msg="Incorrect data";
      }
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  getUser() {
      return this.userService.users;
  }

}
