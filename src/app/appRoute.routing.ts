import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ShopCartComponent } from './shop-car/shop-cart.component';



const routes: Routes = [
  {
    path: 'items',
   component:ItemsComponent
  },
  { path: 'car', component: ShopCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
