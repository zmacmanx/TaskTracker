import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMyItemsComponent } from './modules/my-home/list-my-items/list-my-items.component';

const routes: Routes = [
  {
    path: '',
    component: ListMyItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
