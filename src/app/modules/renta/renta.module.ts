import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { RentaRoutingModule } from './renta-routing.module';
import { RentaComponent } from './renta.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorModule } from '../../services/interceptors/interceptor.module';
import { LandingService } from '../../services/landing.service';

@NgModule({
  declarations: [RentaComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RentaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    InterceptorModule
  ],
  providers: [
    LandingService
  ]
})
export class RentaModule { }
