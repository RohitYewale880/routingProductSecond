import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { ProductsComponent } from './component/product/products/products.component';
import { UsersComponent } from './component/users/users/users.component';
import { FairsComponent } from './component/fairs/fairs/fairs.component';
import { ProductformComponent } from './component/product/productform/productform.component';
import { SinglproductComponent } from './component/product/singlproduct/singlproduct.component';
import { UserformComponent } from './component/users/userform/userform.component';
import { SingleuserComponent } from './component/users/singleuser/singleuser.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'product',
    component : ProductsComponent
  },
  {
    path: 'users',
    component : UsersComponent
  },
  {
    path: 'fairs',
    component : FairsComponent
  },
  {
    path: 'product/adduser',
    component : ProductformComponent
  },
  {
    path: 'product/:id',
    component : SinglproductComponent
  },
  {
    path: 'product/:id/edit',
    component : ProductformComponent
  },
  {
    path : 'users/userAdd',
    component : UserformComponent
  },
  {
    path : 'users/:id',
    component : SingleuserComponent
  },
  {
    path : 'users/:id/edit',
    component : UserformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
