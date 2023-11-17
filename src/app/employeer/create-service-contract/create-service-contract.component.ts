import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({

      employeer_id: new FormControl(),
      service_date: new FormControl(),
      descripcion: new FormControl(),
    });
  }
  onSubmit() {}
}
