import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AuthComponent {
    public email: string;
    public password: string;
    public errorMessage: string;
    constructor(private router: Router,
        private login: LoginService) {
           this.login.getAdmin();
        //    console.log(this.login.adminId);
         }
    
    adminCheck(){
        if(this.email == this.login.adminUser.email && this.password == this.login.adminUser.password)
        {
           return true; 
            //console.log(this.login.adminUser.email);
        }
        else{
            console.log("error",this.email);
            return false;
        }

    }
         
    authenticate(form) {
        if (form.valid) {
            
    }
  }
}
