import { Component, OnInit } from '@angular/core';
import {AuthenticatorService} from '../../services/authenticator.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formUser = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticatorService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.formUser).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.route.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
