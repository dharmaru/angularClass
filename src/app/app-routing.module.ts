import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'loginsuccessful',component:LoginSuccessfulComponent},
  {path: 'forgotpassword',component:ForgotPasswordComponent},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
