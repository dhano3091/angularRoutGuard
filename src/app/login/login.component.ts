import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailCheck='dhano.21@gmail.com';
  passwordCheck='RAGHAV@555cu';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  validate(formdata: any) {
    if (formdata.value.email === this.emailCheck && formdata.value.password === this.passwordCheck) {
      this.authService.checkAccess(true);
    } else {
      this.authService.checkAccess(false);
    }
  }

}
