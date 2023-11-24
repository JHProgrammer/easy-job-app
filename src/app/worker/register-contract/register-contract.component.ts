import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { serviceContractModel } from 'src/app/model/serviceContract';
import { serviceContractWorker } from 'src/app/model/serviceContractWorker';
import { WorkerModelService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-register-contract',
  templateUrl: './register-contract.component.html',
  styleUrls: ['./register-contract.component.css']
})
export class RegisterContractComponent {
  form: FormGroup = new FormGroup({});
  serviceContractWorker : serviceContractWorker = new serviceContractWorker();
  mensaje: string = '';
  tipoAccion: string = 'Registrar';
  id: number = 0;
  edicion: boolean = false;
  tituloBoton: String = "";
  constructor(
    private workerService: WorkerModelService,
    private router: Router,
    private route: ActivatedRoute
    // private occupationService: OccupationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null; //true, false
      // this.titulo = this.edicion ? 'Edición' : 'Registro';
      this.tituloBoton = this.edicion ? 'Editar' : 'Registrar';
      this.init();

    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({

      worker_id: new FormControl(),
      service_contract_id: new FormControl(),
      monto: new FormControl()
     
    });
  }

  init() {
    if (this.edicion) {
      this.workerService.listIdServContractW(this.id).subscribe((data) => {
        this.form = new FormGroup({
          worker_id: new FormControl(data.worker_id),
          service_contract_id: new FormControl(data.service_contract_id),
          monto: new FormControl(data.monto)
        });
      });
    } //del if
  } // del in

  onSubmit(){
    // this.worker.id = this.form.value['id'];
    this.serviceContractWorker.worker_id = this.form.value['worker_id'];
    this.serviceContractWorker.monto = this.form.value['monto'];
    this.serviceContractWorker.service_contract_id = this.form.value['service_contract_id'];
    
    if (this.form.valid) {
      if (this.edicion) {
        console.log(this.serviceContractWorker); //se ve en la herramienta de desarrollador de Chrome
        this.workerService.updateSCW(this.serviceContractWorker).subscribe((data) => {
          this.workerService.list().subscribe((data) => {
            this.workerService.setList(data); //enviando la lista al suscriptor
          });
        });
      } else {
        console.log(this.serviceContractWorker); //se ve en la herramienta de desarrollador de Chrome
        this.workerService.insertServContractW(this.serviceContractWorker).subscribe((data) => {
          this.workerService.listServContractW().subscribe((data) => {
            this.workerService.setListServContractW(data); //enviando la lista al suscriptor
          });
        });
      }
      this.router.navigate(['worker/contractWorker']);
    } else {
      this.mensaje = 'Agregue campos omitidos';
    }
  }
}
