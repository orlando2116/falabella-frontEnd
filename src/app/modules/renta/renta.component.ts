import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../../services/landing.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {

  rentFormGroup: FormGroup;
  landing;

  constructor(private route: ActivatedRoute,
              private landingService: LandingService,
              private toastr: ToastrService) {

  }
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      const parameter = JSON.parse(params['parameter']);
      this.landing = JSON.parse(params['parameter']);
    });

    this.initialize();
  }

  initialize() {
    this.rentFormGroup = new FormGroup({
      rent: new FormControl('', [Validators.required])
    });
  }


  register() {
    this.landing.rent = this.rentFormGroup.value.rent;

    this.landingService.post(this.landing)
    .subscribe(res => {
      this.toastr.success('Datos Guardados!', 'Éxito.');
    }, err => {
      this.toastr.error('lo sentimos, ha ocurrido un error', 'Error :(');
    });
  }

}
