import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePrincipalComponent } from './page-principal/page-principal/page-principal.component';
import { CreateEditComponent } from './employeer/create-edit/create-edit.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerCreateEditComponent } from './worker/worker-create-edit/worker-create-edit.component'; 
import { OccupationComponent } from './occupation/occupation.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { ListServiceContractsPerDateComponent } from './employeer/list-service-contracts-per-date/list-service-contracts-per-date.component';
import { RegisterContractComponent } from './worker/register-contract/register-contract.component';
import { ListarContractMontoComponent } from './worker/listar-contract-monto/listar-contract-monto.component';
import { CreateServiceContractComponent } from './employeer/create-service-contract/create-service-contract.component';

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
    path: 'employeer',
    component: EmployeerComponent,
    children: [
      {
        path: 'edicion/:id', component: CreateEditComponent
      },
      {
        path:'nuevo', component: CreateEditComponent
      },
      {
        path:'contractService', component: ListServiceContractsPerDateComponent
      },
      {
        path: 'addContract', component: CreateServiceContractComponent
      }
    ]
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
      {
        path: 'contractWorker', component: ListarContractMontoComponent,
      },
      {
        path: 'addContractWorker', component: RegisterContractComponent
      }
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
