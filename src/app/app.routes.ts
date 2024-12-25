import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { ContactComponent } from './+pages/contact/contact.component';
import { DesignComponent } from './+pages/design/design.component';
import { LoginComponent } from './+pages/login/login.component';
import { ProductsComponent } from './+pages/products/products.component';

export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'product',component:ProductsComponent},
{path:'design',component:DesignComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent}
];
 