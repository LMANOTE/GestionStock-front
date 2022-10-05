import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Technicien} from "../../gs-api/technicien";
import {Client} from "../../gs-api/client";


@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiServerUrl}/api/v1/clients/all`);
  }

  public addClient(client : Client): Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/api/v1/clients/create`, client);
  }

  findClientByid(idclient : number): Observable<Client>{
    return this.http.get<Client>(`${this.apiServerUrl}/api/v1/clients/${idclient}`);
  }

  public deleteClient(idclient:number):Observable<void>{
    if(idclient){
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/clients/delete/${idclient}`);
    }
    return of();
  }
  /*Technicien*/

  public getTechnicien(): Observable<Technicien[]>{
    return this.http.get<Technicien[]>(`${this.apiServerUrl}/api/v1/techniciens/all`);
  }

  public addTechnicien(technicien : Technicien): Observable<Technicien>{
    return this.http.post<Technicien>(`${this.apiServerUrl}/api/v1/techniciens/create`, technicien);
  }

  findTechnicientByid(idtechnicien : number): Observable<Technicien>{
    return this.http.get<Technicien>(`${this.apiServerUrl}/api/v1/techniciens/${idtechnicien}`);
  }

  public deleteTechnicien(idtechnicien:number):Observable<void>{
    if(idtechnicien){
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/techniciens/delete/${idtechnicien}`);
    }
    return of();
  }
}
