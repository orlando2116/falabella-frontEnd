import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {

  rentFormGroup: FormGroup;
  landing;

  constructor(private route: ActivatedRoute,
              private landingService: LandingService) {

  }
  ngOnInit() {
    console.log(navigator);

    this.route.params.subscribe(params => {
      const parameter = JSON.parse(params['parameter']);
      this.landing = JSON.parse(params['parameter']);
      console.log(parameter)
    });

    this.initialize();
  }

  initialize() {
    this.rentFormGroup = new FormGroup({
      rent: new FormControl('', [Validators.required])
    });
  }


  register() {
    this.landingService.post(this.landing)
    .subscribe(res => {
      console.log(res)
    }, err => {

    })
  }

}
