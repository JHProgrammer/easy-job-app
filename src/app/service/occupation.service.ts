import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccupationModel } from '../model/occupation';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  private url = "http://localhost:8080/api/";
  private listaCambio = new Subject<OccupationModel[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<OccupationModel[]> (this.url + "occupation/all");
  }

//   listId(id:number){
//     return this.http.get<WorkerModel>(this.url+"worker/"+id);
//   }

//   insert(workerModel:WorkerModel){
//     return this.http.post(this.url+ 'worker/register', workerModel);
//   }
//   update(worker: WorkerModel){
//     return this.http.put(this.url + "worker/update", worker);
//   }
//   delete(id:string){
//     return this.http.delete(this.url + "worker/" + id);
//   }

//   setList(listaNueva : WorkerModel[]){
//     this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
//   }

  getList(){
    return this.listaCambio.asObservable();
  }

}
