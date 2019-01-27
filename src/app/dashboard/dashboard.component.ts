import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginMessage
  stringInterpolation

  constructor(private router: Router, private login: LoginService) {
    this.stringInterpolation="HI Gauri" ;
   }

  ngOnInit() {
    setTimeout(()=> {
      this.login.getData().subscribe(Response => {
        this.loginMessage=Response;
        console.log("API Response using get method", Response);
  
      })
    },500);
  }
  //Using Navigate method : it will take you to Login Successful page

  onSuccessfulLogin(){
    this.router.navigate(['loginsuccessful'])
  }

  //Using Method send data through routing
  onClick(){
    this.router.navigate(['forgotpassword'],{queryParams: {id:'5'}})
  }
  

}
