import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dynamic-example',
        component: DynamicComponent
    },
    {
        path: 'lazy',
        loadChildren: () => import('./components/lazy-example/lazy.module').then(m => m.LazyModule)
    }
];
