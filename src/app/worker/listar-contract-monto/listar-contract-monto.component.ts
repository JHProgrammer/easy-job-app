import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private employeerService: EmployeerModelService,
    private router: Router,
    private dialog: MatDialog
  ) {
    console.log('Load Constructor');
  }
  filtrar($event: KeyboardEvent) {}
}
