import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { RentaModule } from './modules/renta/renta.module';
import { IngresarDatosModule } from './modules/ingresar-datos/ingresar-datos.module';
import { MaterialModule } from './material/material.module';
import { NavbarModule } from './modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentaModule,
    IngresarDatosModule,
    NavbarModule,
    BrowserAnimationsModule,
    MaterialModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
