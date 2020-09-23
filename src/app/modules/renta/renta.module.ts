import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { RentaRoutingModule } from './renta-routing.module';
import { RentaComponent } from './renta.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorModule } from '../../services/interceptors/interceptor.module';
import { LandingService } from '../../services/landing.service';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [RentaComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RentaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    InterceptorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center', timeOut: 3000, preventDuplicates: true})
  ],
  providers: [
    LandingService,
    ToastrModule
  ]
})
export class RentaModule { }
