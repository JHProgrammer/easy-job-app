import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeerModel } from 'src/app/model/employeer';
import { EmployeerModelService } from 'src/app/service/employeer.service';
import { EmployeerDialogComponent } from '../employeer-dialog/employeer-dialog.component';

@Component({
  selector: 'app-employeer-list',
  templateUrl: './employeer-list.component.html',
  styleUrls: ['./employeer-list.component.css'],
})
export class EmployeerListComponent {
  lista: EmployeerModel[] = [];
  displayedColumns = [
    'nameEmployer',
    'age_employer',
    'city_employer',
    'phone_employer',
    'email_employer'
  ];
  dataSource = new MatTableDataSource<EmployeerModel>();
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
      .list()
      .subscribe((data) => (this.dataSource.data = data));
    //me suscribo
    this.employeerService.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(EmployeerDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete(id);
      } else {
        console.log('FALSE');
      }
    });
  }
  delete(id: string) {
    this.employeerService.delete(id).subscribe(() => {
      this.employeerService.list().subscribe((data) => {
        this.employeerService.setList(data);
      });
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
