import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private auth: AuthenticationService,
    private router: Router
  ){}


  login() {

    this.auth.loginByGoogle()
    .then(response => {

      console.log(response);
      // this.router.navigate(['/main']);
    })
    .catch(err => {
      console.log(err);
      this.router.navigate(['/home']);
    })
  }

cancel() {

  this.auth.logout()
  .then(response => {

    console.log(response);
    this.router.navigate(['/home']);
  })
  .catch(err => {
    console.log(err);
  });
}

}
