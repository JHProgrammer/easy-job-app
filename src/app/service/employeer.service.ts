import { Injectable } from '@angular/core';
import { EmployeerModel } from '../model/employeer';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serviceContractModel } from '../model/serviceContract';

@Injectable({
  providedIn: 'root'
})
export class EmployeerModelService {
  private url = "http://localhost:8080/api/";
  private listaCambio = new Subject<EmployeerModel[]>();
  private listaSC = new Subject<serviceContractModel[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<EmployeerModel[]> (this.url + "listEmployers");
  }

  listId(id:number){
    return this.http.get<EmployeerModel>(this.url+"employeer/"+id);
  }

  listContratServiceAll() :Observable<any>{
    return this.http.get<serviceContractModel>(this.url+"getServiceContractAll");
  }
  

  insert(EmployeerModel:EmployeerModel){
    return this.http.post(this.url+ 'employeer/register', EmployeerModel);
  }

  insertServiceContract(serviceContractModel: serviceContractModel){
    return this.http.post(this.url+ 'registerServiceContract', serviceContractModel);
  }

  update(aut: EmployeerModel){
    return this.http.put(this.url + "EmployeerModel", aut);
  }

  updateServiceContract(aut: serviceContractModel){
    return this.http.put(this.url+ 'updateServiceContract', serviceContractModel);
  }

  delete(id:string){
    return this.http.delete(this.url + "EmployeerModel/" + id);
  }

  setList(listaNueva : EmployeerModel[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  setListServiceContract(listaNueva : serviceContractModel[]){
    this.listaSC.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  getListServiceContract(){
    return this.listaSC.asObservable();
  }

}
