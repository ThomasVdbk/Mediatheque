import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "products", component: ProductsPageComponent },
  { path: "product", component: ProductPageComponent },
  { path: "**", component: NotFoundComponent } // ** si tu ne trouve pas de nom de route parmis les éléments au dessus alors tu passe par là
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
