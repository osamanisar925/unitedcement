import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ManagementTeamComponent } from './components/management-team/management-team.component';
import { SaudizationTrainingComponent } from './components/saudization-training/saudization-training.component';
import { SocialResponsibilitiesComponent } from './components/social-responsibilities/social-responsibilities.component';
import { ProductsComponent } from './components/products/products.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';
import { VendorsComponent } from './components/vendors/vendors.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'management-team', component: ManagementTeamComponent },
    { path: 'saudization-training', component: SaudizationTrainingComponent },
    { path: 'social-responsibilities', component: SocialResponsibilitiesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'quality-assurance', component: QualityAssuranceComponent },
    { path: 'vendors', component: VendorsComponent },
    {
        path: 'shopping',
        loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)
    },
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' }
];
