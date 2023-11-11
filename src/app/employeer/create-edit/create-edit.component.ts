import { Component } from '@angular/core';
import { EmployeerModel } from 'src/app/model/employeer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeerModelService } from 'src/app/service/employeer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent {
  employeer: EmployeerModel = new EmployeerModel(); // Crea una instancia de User
  form: FormGroup = new FormGroup({});
  mensaje: String = '';
  tipoAccion: String = '';
  edicion: Boolean = false;
  constructor(
    private employeerService: EmployeerModelService,
    private router : Router  
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tipoAccion = 'Guardar';

    this.form = new FormGroup({
      nameEmployer: new FormControl('', [Validators.required]),
      email_employer: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      city_employer: new FormControl(),
      age_employer: new FormControl(),
      phone_employer: new FormControl(),
    });
  }

  onSubmit() {
    this.employeer.nameEmployer = this.form.value['nameEmployer'];
    this.employeer.email_employer = this.form.value['email_employer'];
    this.employeer.city_employer = this.form.value['city_employer'];
    this.employeer.phone_employer = this.form.value['phone_employer'];
    this.employeer.age_employer = this.form.value['age_employer'];
    console.log(this.form);
    if (this.form.valid) {
      if (this.edicion) {
        // console.log(this.employeer); //se ve en la herramienta de desarrollador de Chrome
        // this.employeerService.update(this.employeer).subscribe((data) => {
        //   this.employeerService.list().subscribe((data) => {
        //     this.employeerService.setList(data); //enviando la lista al suscriptor
        //   });
        // });
      } else {
        console.log(this.employeer); //se ve en la herramienta de desarrollador de Chrome
        this.employeerService.insert(this.employeer).subscribe((data) => {
          // this.employeerService.list().subscribe((data) => {
          //   this.employeerService.setList(data); //enviando la lista al suscriptor
          // });
        });
      }
      // this.router.navigate(['']);
    } else {
      this.mensaje = 'Agregue campos omitidos';
    }
  }
}
