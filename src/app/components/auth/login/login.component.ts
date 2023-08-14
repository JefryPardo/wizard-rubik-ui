import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/interface/usuario-interface';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UsuarioDataService } from 'src/app/service/usuario-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private usuario: UsuarioDataService
  ){}


  login() {

    this.auth.loginByGoogle()
    .then((response:any) => {

      console.log(response);

      const user: Usuario = {
        uid: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        accessToken: response.user.accessToken,
        estado: true
      }; 
  
      this.usuario.usuario = user;

      this.router.navigate(['/main']);
    })
    .catch(err => {
      console.log(err);
      this.router.navigate(['/home']);
    })
  }

cancel() {

  this.auth.logout()
  .then((response:any) => {

    console.log(response);
    this.router.navigate(['/home']);
  })
  .catch(err => {
    console.log(err);
    this.router.navigate(['/home']);
  });
}

}
