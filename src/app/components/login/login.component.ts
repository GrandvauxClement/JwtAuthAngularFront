import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthenticatorService} from '../../services/authenticator.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser = new User();
  isLoginFailed = false;
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authent: AuthenticatorService, private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.authent.login(this.formUser).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.authent.saveUser(data.token).subscribe(then => {
          this.tokenStorage.saveUser(then);
          this.route.navigate(['/home']);
        });




        /* this.isLoginFailed = false;
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser().roles;
         this.reloadPage();*/
      },
      err => {
        console.log(err);
      }
    );
  }

}
