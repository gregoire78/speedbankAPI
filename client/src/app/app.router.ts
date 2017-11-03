import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DepenseComponent } from './depense/depense.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'depense', component: DepenseComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);