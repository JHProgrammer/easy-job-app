import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//NAVBAR
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { PagePrincipalComponent } from './page-principal/page-principal/page-principal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateEditComponent } from './employeer/create-edit/create-edit.component';


import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';


import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { WorkerComponent } from './worker/worker.component';
import { ListarComponent } from './worker/listar/listar.component';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DialogoComponent } from './worker/listar/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { WorkerCreateEditComponent } from './worker/worker-create-edit/worker-create-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagePrincipalComponent,
    CreateEditComponent,
    WorkerComponent,
    ListarComponent,
    DialogoComponent,
    WorkerCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
