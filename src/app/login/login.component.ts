import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDate =new Date(1988, 3, 15);

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

}
