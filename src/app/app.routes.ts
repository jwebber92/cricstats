import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { SquadComponent } from './views/squad/squad.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'squad',
        component: SquadComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
