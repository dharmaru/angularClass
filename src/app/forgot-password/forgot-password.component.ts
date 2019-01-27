import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  lensID;

  constructor(private router:ActivatedRoute) { }

  //send data through routing(for any specific id or any specfic key)
  ngOnInit() {
    this.lensID = this.router.snapshot.queryParams.id; //this id is specified in dashboard.ts
    console.log("value of router is", this.lensID);
  }

}
