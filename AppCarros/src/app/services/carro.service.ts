import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ICarro } from '../interfaces/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + "Carro/";
  constructor(private http: HttpClient) { }
  //Método para invocar al endpoint de ListaCarros
  getList(): Observable<ICarro[]>{
  return this.http.get<ICarro[]>(`${this.apiUrl}ListaCarros`);
  }
  /* //Método para invocar al endpoint de AgregarTarea
  add(request: ICarro): Observable<ICarro>{
  return this.http.post<ICarro>(`${this.apiUrl}AgregarTarea`, request);
  }
  //Método para invocar al endpoint de ModificarTarea
  update(request: ICarro): Observable<void>{
  return this.http.put<void>(`${this.apiUrl}ModificarTarea/${request.idCarro}`, request);
  }
  //Método para invocar al endpoint de EliminarTarea
  delete(idTarea: number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}EliminarTarea/${idTarea}`);
  } */

}
