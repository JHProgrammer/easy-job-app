import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePrincipalComponent } from './page-principal/page-principal/page-principal.component';
import { CreateEditComponent } from './employeer/create-edit/create-edit.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '', 
    component: PagePrincipalComponent
  },
  {
    path: 'employeerAdd',
    component: CreateEditComponent
  },
  {
    path: 'workerComp',
    component: WorkerComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
