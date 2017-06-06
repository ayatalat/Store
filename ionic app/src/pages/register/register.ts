import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userName:string;
  email:string;
  mobile:number;
  country:string;
  city:string;
  state:string;
  password:string;

  msg:string;

  constructor(public userService:UserService ,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.userName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(name,email,mobile,country,city,state,password,confirmPass) {
    if(name.length>0 && email.length>0 && mobile.length>0 && country.length>0 && city.length>0 
    && state.length>0 && password.length>0) {
      if(password == confirmPass) {
        this.userService.addUser(name,email,mobile,country,city,state,password);
        this.navCtrl.push(HomePage);
      } else {
        this.msg = "password dosen't matches";
      }
    } else {
      this.msg = "You must fill all fields";
    }
  }

}
