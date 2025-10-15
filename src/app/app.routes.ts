import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HeaderComponent } from './header/header';

export const routes: Routes = [
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent }
];
