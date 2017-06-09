import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AuthComponent {
    public email: string;
    public password: string;
    public errorMessage: string;
    constructor(private router: Router,
        private login: LoginService) {
           this.login.getAdmin();
        //console.log(this.login.adminId);
         }
    
    adminCheck(){
        // this.login.login(this.email,this.password);
        if(!this.login.login(this.email,this.password)){
           alert("your email or password is invalid");
        }
    }
         
    authenticate(form) {
        if (form.valid) {
            
    }
  }
}
