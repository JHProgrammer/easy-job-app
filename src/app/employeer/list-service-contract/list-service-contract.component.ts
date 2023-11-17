import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-service-contract',
  templateUrl: './list-service-contract.component.html',
  styleUrls: ['./list-service-contract.component.css']
})
export class ListServiceContractComponent {

  // lista: EmployeerModel[] = [];
  displayedColumns = [
    'nameEmployer',
    'age_employer',
    'city_employer',
    'phone_employer',
    'email_employer'
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
filtrar($event: KeyboardEvent) {

}

}
