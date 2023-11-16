import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WorkerModel } from 'src/app/model/worker';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { WorkerModelService } from 'src/app/service/worker.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  lista: WorkerModel[] = [];
  displayedColumns = ['id', 'name_worker', 'age_worker', 'address_worker','email_worker','phone_worker','city_worker','accion01','accion02'];
  dataSource = new MatTableDataSource<WorkerModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private workerService: WorkerModelService, 
               private router: Router,
               private dialog:MatDialog
               ){
      console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.workerService.list().subscribe(data => this.dataSource.data = data);
    //me suscribo
    this.workerService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog(id:string){
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id);
      }else{
        console.log("FALSE");
      }
    });
  }
  delete(id:string){
    this.workerService.delete(id).subscribe(()=>{
      this.workerService.list().subscribe(data=>{
        this.workerService.setList(data);
      })
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
