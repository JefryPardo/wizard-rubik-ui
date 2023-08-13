import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  items: MenuItem[];

  constructor() { }
}
