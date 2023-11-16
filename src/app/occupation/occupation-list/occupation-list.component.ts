import { Component, OnInit, ViewChild } from '@angular/core';
import { OccupationModel } from 'src/app/model/occupation';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OccupationService } from 'src/app/service/occupation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occupation-list',
  templateUrl: './occupation-list.component.html',
  styleUrls: ['./occupation-list.component.css'],
})
export class OccupationListComponent implements OnInit {
  lista: OccupationModel[] = [];
  displayedColumns = ['id', 'name_occupation', 'desc_occupation'];
  dataSource = new MatTableDataSource<OccupationModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private occupationService: OccupationService,
    private router: Router
  ) {
    console.log('Load Constructor');
  }

  ngOnInit(): void {
    this.occupationService
      .list()
      .subscribe((data) => (this.dataSource.data = data));
    //me suscribo
    this.occupationService.getList().subscribe((data) => {
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
