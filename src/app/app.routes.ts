import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductResolver } from '../resolver/product.resolver';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProductsComponent } from '../components/products/products.component';

export const routes: Routes = [
    {   path: '', component: DashboardComponent },
    {   path: 'home', component: HomeComponent },
    {   path: 'about', component: AboutComponent }, 
    {   path: 'products', component: ProductsComponent, resolve: { product:ProductResolver } }, //, resolve: { product: ProductResolver } 
    {   path: '', redirectTo:'/', pathMatch:'full'   },
    {   path: '**', redirectTo:'/'   },
];
