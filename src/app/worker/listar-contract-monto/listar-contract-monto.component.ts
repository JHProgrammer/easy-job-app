import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { serviceContractWorker } from 'src/app/model/serviceContractWorker';
import { WorkerModelService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-listar-contract-monto',
  templateUrl: './listar-contract-monto.component.html',
  styleUrls: ['./listar-contract-monto.component.css']
})
export class ListarContractMontoComponent {
  displayedColumns = [
    'worker_id',
    'service_contract_id',
    'monto',
  ];
  // dataSource = new MatTableDataSource<EmployeerModel>();
  dataSource = new MatTableDataSource<serviceContractWorker>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private workerService: WorkerModelService, 
               private router: Router,
               private dialog:MatDialog
               ){
      console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.workerService.listServContractW().subscribe(data => this.dataSource.data = data);
    //me suscribo
    this.workerService.getListServContractW().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }
 filtrar(e:any){
   this.dataSource.filter = e.target.value.trim();
 }
}
