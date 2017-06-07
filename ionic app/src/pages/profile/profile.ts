import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditDataPage } from '../edit-data/edit-data';
import { UserService } from "../../Services/user.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  mobiles = [];
  addresses = [];
  user_email;
  user={};

  constructor(private storage: Storage,public userService:UserService,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('email').then((val) => {
    this.user_email = val;
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editData() {
    this.navCtrl.push(EditDataPage);
  }

  listMobiles() {
    for(var i=0 ; i<this.userService.users.length;i++) {
      for(var j=0 ; j<this.userService.users[i].mobile.length;j++) {
        this.mobiles.push(this.userService.users[i].mobile[j]);
          // console.log(this.userService.users[i].mobile[j]);
      }
    }
    console.log(this.mobiles);
    return this.mobiles;
  }

  listAddresses() {
   this.user =this.userService.getUserBuEmail(this.user_email);
    // for(var i =0;i<this.userService.users.length;i++) {
    //   for(var j=0 ; j<this.userService.users[i].address.length;j++) {
    //     this.addresses.push(this.userService.users[i].address);
    //   }
    // }
    // console.log(this.addresses);
    // return this.addresses;
  }

}
