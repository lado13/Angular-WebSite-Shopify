import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { ShopingCartComponent } from './shopping-cart/shoping-cart.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'products/:productId',
    component:DetailComponent
  },
  {
    path:'shopCart',
    component:ShopingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
