import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditDataPage } from '../edit-data/edit-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editData() {
    this.navCtrl.push(EditDataPage);
  }

}
