import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { serviceContractModel } from 'src/app/model/serviceContract';
import { EmployeerModelService } from 'src/app/service/employeer.service';

@Component({
  selector: 'app-list-service-contracts-per-date',
  templateUrl: './list-service-contracts-per-date.component.html',
  styleUrls: ['./list-service-contracts-per-date.component.css'],
})
export class ListServiceContractsPerDateComponent {
  lista: serviceContractModel[] = [];
  displayedColumns = [
    'id',
    'employer_id',
    'service_date',
    'desc_service'
  ];
  dataSource = new MatTableDataSource<serviceContractModel>();
  // dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeerService: EmployeerModelService,
    private router: Router,
    private dialog: MatDialog
  ) {
    console.log('Load Constructor');
  }

  ngOnInit(): void {
    this.employeerService
      .listContratServiceAll()
      .subscribe((data) => (this.dataSource.data = data));
    //me suscribo
    this.employeerService.getListServiceContract().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
