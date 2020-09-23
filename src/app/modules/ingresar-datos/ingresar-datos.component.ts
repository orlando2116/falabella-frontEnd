import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.component.html',
  styleUrls: ['./ingresar-datos.component.css']
})
export class IngresarDatosComponent implements OnInit {

  ingresarDatosFormGroup: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.ingresarDatosFormGroup = new FormGroup({
      rut: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }


  login() {
    this.router.navigate(['renta', JSON.stringify(this.ingresarDatosFormGroup.value)]);
    }
}
