import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePrincipalComponent } from './page-principal/page-principal/page-principal.component';
import { CreateEditComponent } from './employeer/create-edit/create-edit.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerCreateEditComponent } from './worker/worker-create-edit/worker-create-edit.component'; 
import { OccupationComponent } from './occupation/occupation.component';

const routes: Routes = [
  {
    path: '', 
    component: PagePrincipalComponent
  },
  {
    path: 'home', 
    component: PagePrincipalComponent
  },
  {
    path: 'employeerAdd',
    component: CreateEditComponent
  },
  {
    path: 'worker',
    component: WorkerComponent , children: [
      {
        path: 'edicion/:id', component: WorkerCreateEditComponent
      },
      {
        path:'nuevo', component: WorkerCreateEditComponent
      },
    ]
  },
  {
    path: 'occupation',
    component: OccupationComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
