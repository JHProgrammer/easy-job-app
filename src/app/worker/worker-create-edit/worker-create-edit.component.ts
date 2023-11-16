import { Component, OnInit, NgIterable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerModel } from 'src/app/model/worker';
import * as moment from 'moment';
import { WorkerModelService } from 'src/app/service/worker.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OccupationModel } from 'src/app/model/occupation';
import { OccupationService } from 'src/app/service/occupation.service';

@Component({
  selector: 'app-worker-create-edit',
  templateUrl: './worker-create-edit.component.html',
  styleUrls: ['./worker-create-edit.component.css'],
})
export class WorkerCreateEditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  worker: WorkerModel = new WorkerModel();
  occupations: NgIterable<OccupationModel> = [];
  titulo: string = 'Registro';
  selectedValue: string = '';
  tituloBoton: string = 'Registrar';
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private workerService: WorkerModelService,
    private router: Router,
    private route: ActivatedRoute,
    private occupationService: OccupationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null; //true, false
      this.titulo = this.edicion ? 'Edición' : 'Registro';
      this.tituloBoton = this.edicion ? 'Editar' : 'Registrar';
      this.init();

      //Consumir occupations
      this.occupationService
        .list()
        .subscribe((data) => {
          this.occupations= data;
          console.log("data occupations from worker",data);
        });
    });

    this.form = new FormGroup({
      id: new FormControl(),
      name_worker: new FormControl('', [Validators.required]),
      age_worker: new FormControl('', [Validators.required]),
      address_worker: new FormControl(),
      email_worker: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phone_worker: new FormControl('', [Validators.required]),
      city_worker: new FormControl('', [Validators.required]),
    });
  }

  init() {
    if (this.edicion) {
      this.workerService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name_worker: new FormControl(data.name_worker),
          age_worker: new FormControl(data.age_worker),
          address_worker: new FormControl(data.address_worker),
          email_worker: new FormControl(data.email_worker),
          phone_worker: new FormControl(data.phone_worker),
          city_worker: new FormControl(data.city_worker),
        });
      });
    } //del if
  } // del in

  aceptar() {
    // this.worker.id = this.form.value['id'];
    this.worker.name_worker = this.form.value['name_worker'];
    this.worker.age_worker = this.form.value['age_worker'];
    this.worker.address_worker = this.form.value['address_worker'];
    this.worker.email_worker = this.form.value['email_worker'];
    this.worker.phone_worker = this.form.value['phone_worker'];
    this.worker.city_worker = this.form.value['city_worker'];
    if (this.form.valid) {
      if (this.edicion) {
        console.log(this.worker); //se ve en la herramienta de desarrollador de Chrome
        this.workerService.update(this.worker).subscribe((data) => {
          this.workerService.list().subscribe((data) => {
            this.workerService.setList(data); //enviando la lista al suscriptor
          });
        });
      } else {
        console.log(this.worker); //se ve en la herramienta de desarrollador de Chrome
        this.workerService.insert(this.worker).subscribe((data) => {
          this.workerService.list().subscribe((data) => {
            this.workerService.setList(data); //enviando la lista al suscriptor
          });
        });
      }
      this.router.navigate(['worker']);
    } else {
      this.mensaje = 'Agregue campos omitidos';
    }
  }
}
