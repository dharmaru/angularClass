import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.css']
})
export class LoginSuccessfulComponent implements OnInit {

  constructor(private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Submitted Successfully');
  }
  showError() {
    this.toastr.error('Error While Submitting');
  }
  showWarning() {
    this.toastr.warning('Check The Information');
    
  }
  // onSuccessfulLogin(){
  //   this.router.navigate(['loginsuccessful'])
  // }

}
