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

  constructor(public userService:UserService ,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.userName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(name,email,mobile,country,city,state,password) {
    this.userService.addUser(name,email,mobile,country,city,state,password);
    this.navCtrl.push(HomePage);
  }

}
