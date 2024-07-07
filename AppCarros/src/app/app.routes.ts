import { Routes } from '@angular/router';
import { CatalogoComponent } from './features/catalogo/catalogo.component';
import { ContactoComponent } from './features/contacto/contacto.component';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'inicio', component: InicioComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];
