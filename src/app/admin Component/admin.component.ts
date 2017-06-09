import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  // We'll call our root component app-component
    selector: 'app-Admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  title = 'Store';

  constructor(private loginService: LoginService) {}
  ngOnInit(){
        this.loginService.checkCredentials();
    }
  logout()
  {
    this.loginService.logout();
  }
}