import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchPipe} from './pipe/search.pipe';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOption, MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { OnlyAlphabets, ChangeText } from './directives/custom.directive';
import { CustomroutingModule } from './customrouting/customrouting.module';
import { CustomModule } from './custom/custom.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    //ForgotPasswordComponent,
    LoginSuccessfulComponent,
    SearchPipe,
    ErrorDisplayComponent,
    OnlyAlphabets,
    ChangeText

  ],
  imports: [
    CustomroutingModule,
    CustomModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
