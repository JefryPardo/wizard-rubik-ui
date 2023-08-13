import { Component } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private navbarService: NavbarService) {

    this.navbarService.items = [
      {
        label: 'Creador',
        icon: 'pi pi-star',
        routerLink: ['/item']
      },
      {
        label: 'Información',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/buy']
      }
    ];
  }
}
