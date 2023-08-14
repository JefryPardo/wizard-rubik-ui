import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingRoutingModule } from './main-routing-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
