import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
