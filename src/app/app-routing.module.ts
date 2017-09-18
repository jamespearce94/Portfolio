import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule' },
    { path: 'portfolio', loadChildren: './layout/portfolio/portfolio.module#PortfolioModule' },
    { path: 'dashboard', loadChildren: './layout/dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
