import { Routes } from '@angular/router';
import { HomeAdmin } from './pages/admin/home-admin/home-admin';
import { Login } from './pages/admin/login/login';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [

    {
        path: '',
        component: MainLayout
    },
    {
        path: 'admin',
        // canActivateChild: [authGuard],
        // data: { roles: ['admin'] },
        children: [
            { path: '', component: Login },
            { path: 'home', component: HomeAdmin },
        ],
    },

];
