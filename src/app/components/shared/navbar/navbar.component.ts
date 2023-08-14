import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import Usuario from 'src/app/interface/usuario-interface';
import { NavbarService } from 'src/app/service/navbar.service';
import { UsuarioDataService } from 'src/app/service/usuario-data.service';


interface menuPerfil {
  name: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  

  items: MenuItem[];
  usuario: Usuario;

  menu: menuPerfil[] | undefined;
  selectedMenu: menuPerfil | undefined;


  constructor(
    private router: Router, 
    private navbarService: NavbarService,
    private usuarioService: UsuarioDataService
  ) {
    
    console.log(this.usuarioService.usuario);
    this.items = this.navbarService.items;
    this.usuario = this.usuarioService.usuario;

    this.menu = [
      { name: 'Perfil', code: 'pr' },
      { name: 'Log out', code: 'lo' }
    ];
  }

  login() {

    console.log('init login');
    this.router.navigate(['/login']);
  }
}
