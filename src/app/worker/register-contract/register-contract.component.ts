import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-contract',
  templateUrl: './register-contract.component.html',
  styleUrls: ['./register-contract.component.css']
})
export class RegisterContractComponent {
  form: FormGroup = new FormGroup({});
  mensaje: string = '';
  tipoAccion: string = '';
  constructor(
    // private workerService: WorkerModelService,
    private router: Router,
    private route: ActivatedRoute
    // private occupationService: OccupationService
  ) {}

  onSubmit(){}
}
