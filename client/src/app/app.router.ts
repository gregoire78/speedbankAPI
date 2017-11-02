import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DepenseComponent } from './depense/depense.component';

export const router: Routes = [
    {path: '', redirectTo: 'depense', pathMatch: 'full' },
    {path: 'depense', component: DepenseComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);