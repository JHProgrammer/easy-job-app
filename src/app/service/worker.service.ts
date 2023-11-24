import { Injectable } from '@angular/core';
import { WorkerModel } from '../model/worker';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serviceContractWorker } from '../model/serviceContractWorker';
import { serviceContractModel } from '../model/serviceContract';

@Injectable({
  providedIn: 'root'
})
export class WorkerModelService {
  private url = "http://localhost:8080/api/";
  private listaCambio = new Subject<WorkerModel[]>();
  private listaSCW = new Subject<serviceContractWorker[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<WorkerModel[]> (this.url + "getAllWorkers");
  }

  listServContractW() : Observable<any>{
    return this.http.get<serviceContractWorker[]> (this.url + "serviceContractWorker/all");
  }

  listId(id:number){
    return this.http.get<WorkerModel>(this.url+"worker/"+id);
  }

  listIdServContractW(id:number){
    return this.http.get<serviceContractWorker>(this.url+"worker/"+id);
  }

  insert(workerModel:WorkerModel){
    return this.http.post(this.url+ 'worker/register', workerModel);
  }

  insertServContractW(serviceContractWorker:serviceContractWorker){
    return this.http.post(this.url+ 'register/serviceContractWorker', serviceContractWorker);
  }

  update(worker: WorkerModel){
    return this.http.put(this.url + "worker/update", worker);
  }

  updateSCW(serviceContractWorker: serviceContractWorker){
    return this.http.put(this.url + "worker/update", serviceContractWorker);
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

  setListServContractW(listaSCW : serviceContractWorker[]){
    this.listaSCW.next(listaSCW);//enviar la nueva lista a los suscriptores
  }

  getListServContractW(){
    return this.listaSCW.asObservable();
  }

}
