import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import {AuthenticatorGuardService} from './guards/authenticator.guard';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {authInterceptorProviders} from './_helpers/authenticator.interceptor'

export function getToken() {
  return localStorage.getItem('auth-token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({ config: {
        tokenGetter: getToken
      }})
  ],
  providers: [
    AuthenticatorGuardService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

