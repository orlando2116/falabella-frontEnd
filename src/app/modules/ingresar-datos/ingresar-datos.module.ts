import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarDatosComponent } from './ingresar-datos.component';
import { IngresarDatosRoutingModule } from './ingresar-datos.routing.module';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [IngresarDatosComponent],
  imports: [
    CommonModule,
    IngresarDatosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ],
  exports: [
    IngresarDatosComponent
  ]
})
export class IngresarDatosModule { }
