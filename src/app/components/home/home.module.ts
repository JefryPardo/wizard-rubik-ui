import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingRoutingModule } from './home-routing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../auth/login/login.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
