import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHomeRoutingModule } from './my-home-routing.module';
import { ListMyItemsComponent } from './list-my-items/list-my-items.component';

@NgModule({
  declarations: [
    ListMyItemsComponent
  ],
  imports: [
    CommonModule,
    MyHomeRoutingModule
  ]
})
export class MyHomeModule { }
