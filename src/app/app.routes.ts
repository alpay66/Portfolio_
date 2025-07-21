import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    },
];

