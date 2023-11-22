import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { serviceContractModel } from 'src/app/model/serviceContract';
import { EmployeerModelService } from 'src/app/service/employeer.service';

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
  id: number = 0;
  serviceContractModel : serviceContractModel = new serviceContractModel();
  constructor(
    // private employeerService: EmployeerModelService,
    private router : Router,
    private route : ActivatedRoute,
    private employerService : EmployeerModelService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((data: Params)=>{
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null; //true, false
      this.tipoAccion = this.edicion ? 'Editar' : 'Registrar';
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({

      employeer_id: new FormControl(),
      service_date: new FormControl(),
      desc_service: new FormControl(),
    });
  }
  
  onSubmit() {
    // this.serviceContractModel.id = this.form.value['name_worker'];
    this.serviceContractModel.employer_id = this.form.value['employeer_id'];
    this.serviceContractModel.service_date = this.form.value['service_date'];
    this.serviceContractModel.desc_service = this.form.value['desc_service'];
    if (this.form.valid) {
      if (this.edicion) {
        console.log(this.serviceContractModel); //se ve en la herramienta de desarrollador de Chrome
        this.employerService.updateServiceContract(this.serviceContractModel).subscribe((data) => {
          this.employerService.listContratServiceAll().subscribe((data) => {
            this.employerService.setListServiceContract(data); //enviando la lista al suscriptor
          });
        });
      } else {
        console.log(this.serviceContractModel); //se ve en la herramienta de desarrollador de Chrome
        this.employerService.insertServiceContract(this.serviceContractModel).subscribe((data) => {
          this.employerService.listContratServiceAll().subscribe((data) => {
            this.employerService.setListServiceContract(data); //enviando la lista al suscriptor
          });
        });
      }
      this.router.navigate(['employeer/contractService']);
    } else {
      this.mensaje = 'Agregue campos omitidos';
    }
  }
}
