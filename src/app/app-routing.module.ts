import { RouteguardGuard } from './routeguard.guard';
import { HomeComponent } from './home/home.component';
import { ProductsWomenComponent } from './products/products-women/products-women.component';
import { ProductsMenComponent } from './products/products-men/products-men.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent, canActivate:[RouteguardGuard]},
  {path:'products/men',component:ProductsMenComponent, canActivate:[RouteguardGuard]},
  {path:'products/women',component:ProductsWomenComponent, canActivate:[RouteguardGuard]},
  {path:'shoppingCart',component:ShoppingCartComponent, canActivate:[RouteguardGuard]},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
