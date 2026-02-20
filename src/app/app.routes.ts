import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { AdminLayout } from './pages/admin/admin-layout/admin-layout';
import { Categorieslist } from './pages/admin/categories/categorieslist/categorieslist';

export const routes: Routes = [

    {
        path: '',
        component: MainLayout
    },

    // Login separado
    {
        path: 'admin/login',
        component: Login
    },

    // Área administrativa com layout
    {
        path: 'admin',
        component: AdminLayout,
        // canActivate: [authGuard], ← depois você ativa
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'categorias', component: Categorieslist },
        ]
    }


];
