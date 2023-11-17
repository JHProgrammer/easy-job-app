import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-contract',
  templateUrl: './register-contract.component.html',
  styleUrls: ['./register-contract.component.css']
})
export class RegisterContractComponent {
  form: FormGroup = new FormGroup({});
  mensaje: string = '';
  tipoAccion: string = 'Registrar';
  constructor(
    // private workerService: WorkerModelService,
    private router: Router,
    private route: ActivatedRoute
    // private occupationService: OccupationService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({

      worker_id: new FormControl(),
      monto: new FormControl()
     
    });
  }
  onSubmit(){}
}
