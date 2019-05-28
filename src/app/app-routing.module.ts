import { HomeComponent } from './admin/home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RegisterComponent } from './register/register.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

import { ManageItemsComponent } from './admin/manage-items/manage-items.component';

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "shoppingCart", component: ShoppingCartComponent },
  { path: "orders", component: MyOrdersComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin/home", component: HomeComponent },
  { path: "admin/manage-items", component: ManageItemsComponent },
  { path: "viewDetails/:pid", component: ViewDetailsComponent },
  { path: "newproduct", component: ManageItemsComponent },
  { path: "editdetails/:pid", component: ManageItemsComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
