import { Injectable } from '@angular/core';
import { EmployeerModel } from '../model/employeer';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeerModelService {
  private url = "http://localhost:8080/api/";
  private listaCambio = new Subject<EmployeerModel[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<EmployeerModel[]> (this.url + "listEmployers");
  }

  listId(id:number){
    return this.http.get<EmployeerModel>(this.url+"worker/"+id);
  }

  insert(EmployeerModel:EmployeerModel){
    return this.http.post(this.url+ 'employeer/register', EmployeerModel);
  }
  update(aut: EmployeerModel){
    return this.http.put(this.url + "EmployeerModel", aut);
  }
  delete(id:string){
    return this.http.delete(this.url + "EmployeerModel/" + id);
  }

  setList(listaNueva : EmployeerModel[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getList(){
    return this.listaCambio.asObservable();
  }

}
