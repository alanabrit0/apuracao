import { Routes } from '@angular/router';
import { Resultado } from './pages/resultado/resultado';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sobre', component: Sobre },
    { path: 'resultado', component: Resultado },
    {path: '**', redirectTo: ''},
];