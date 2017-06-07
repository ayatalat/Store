import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(public geolocation: Geolocation,public userService:UserService ,public navCtrl: NavController, public navParams: NavParams) {
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
  get_location()
  {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy:true,
      timeout:300000,
      maximumAge:0
    }).then((Position)=>{
      var x = Position.coords.latitude;
      var y = Position.coords.longitude; 
      this.displayLocation(x,y);
    },(err)=>alert(err)).catch(err=>alert(err));
    let watcher = this.geolocation.watchPosition().subscribe((Position)=>{
      watcher.unsubscribe();
    })
  }
  
  displayLocation(latitude,longitude)
  {
    var request = new XMLHttpRequest();

    var method = 'GET';
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
    var async = true;

    request.open(method, url, async);
    request.onreadystatechange = function()
    {
      if(request.readyState == 4 && request.status == 200)
      {
        var data = JSON.parse(request.responseText);
        var address = data.results[0];
        address = address.formatted_address;
        address = address.split(',');
        console.log(address);
        var detailedAddress = address[1]+" "+address[0];
        var state = address[2];
        var country = address[3];
        alert(detailedAddress)
      }
    };
    request.send();
  };
}
