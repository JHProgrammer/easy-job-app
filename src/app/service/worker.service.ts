import { Injectable } from '@angular/core';
import { WorkerModel } from '../model/worker';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerModelService {
  private url = "http://localhost:8080/api/";
  private listaCambio = new Subject<WorkerModel[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<WorkerModel[]> (this.url + "getAllWorkers");
  }

  listId(id:number){
    return this.http.get<WorkerModel>(this.url+"worker/"+id);
  }

  insert(workerModel:WorkerModel){
    return this.http.post(this.url+ 'worker/register', workerModel);
  }
  update(worker: WorkerModel){
    return this.http.put(this.url + "worker/update", worker);
  }
  delete(id:string){
    return this.http.delete(this.url + "worker/" + id);
  }

  setList(listaNueva : WorkerModel[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getList(){
    return this.listaCambio.asObservable();
  }

}
