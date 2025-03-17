import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenador } from './ordenador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorRestService {

  constructor(private httpClient:HttpClient) { 


  }

  public buscarTodos():Observable<Ordenador[]> {

    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/ordenador");

  }

  public insertar(ordenador:Ordenador):Observable <Ordenador> {

    return this.httpClient.post<Ordenador>("http://localhost:8080/webapi/ordenador", ordenador);
  }


  public borrar(numserie:number): Observable<Ordenador> {

    return this.httpClient.delete<Ordenador>('http://localhost:8080/webapi/ordenador/${numserie}');

  }

  public buscarOrdenados(campo:string, direccion:string): Observable<Ordenador[]>{

    const url = 'http://localhost:8080/webapi/ordenador/campo/${campo}/direccion/${direccion}';

    return this.httpClient.get<Ordenador[]> (url) ;
  }
}
