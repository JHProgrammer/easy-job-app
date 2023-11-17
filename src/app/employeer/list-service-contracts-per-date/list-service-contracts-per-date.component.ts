import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-service-contracts-per-date',
  templateUrl: './list-service-contracts-per-date.component.html',
  styleUrls: ['./list-service-contracts-per-date.component.css'],
})
export class ListServiceContractsPerDateComponent {
  displayedColumns = [
    'employer_id',
    'service_date',
    'desc_service'
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
