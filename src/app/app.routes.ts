import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    {
        path: 'shopping',
        loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)
    },
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' }
];
