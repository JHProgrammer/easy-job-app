import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service-contract',
  templateUrl: './create-service-contract.component.html',
  styleUrls: ['./create-service-contract.component.css'],
})
export class CreateServiceContractComponent {
  form: FormGroup = new FormGroup({});
  mensaje: String = '';
  tipoAccion: String = '';
  edicion: Boolean = false;

  constructor(
    // private employeerService: EmployeerModelService,
    private router : Router
  ) {}
  onSubmit() {}
}
