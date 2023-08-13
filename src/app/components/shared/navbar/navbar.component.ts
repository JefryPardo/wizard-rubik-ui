import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items: MenuItem[];

  constructor(private router: Router, private navbarService: NavbarService) {
    
    this.items = this.navbarService.items;
  }

  login() {

    console.log('init login');
    this.router.navigate(['/login']);
  }
}
