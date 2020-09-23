import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarDatosComponent } from './ingresar-datos.component';

const routes: Routes = [
    {
        path: '',
        component: IngresarDatosComponent
    },
    {
        path: 'ingresarDatos',
        component: IngresarDatosComponent
    },
    {path: '**', pathMatch: 'full', redirectTo: 'ingresarDatosre'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarDatosRoutingModule { }
