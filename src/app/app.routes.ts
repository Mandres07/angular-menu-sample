import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./components/profile/profile.component')
            },
            {
                path: 'tables',
                loadComponent: () => import('./components/tables/tables.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }

        ]
    }, 
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
