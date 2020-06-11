import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticatorService} from '../services/authenticator.service';


@Injectable()
export class AuthenticatorGuardService implements CanActivate {
  constructor(public auth: AuthenticatorService, public router: Router) {}

  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
