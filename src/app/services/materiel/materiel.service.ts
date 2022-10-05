import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Materiel} from "../../gs-api/materiel";


@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getMateriels(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${this.apiServerUrl}/api/v1/materieles/all`);
  }

  public addMateriel(materiel : Materiel): Observable<Materiel>{
    return this.http.post<Materiel>(`${this.apiServerUrl}/api/v1/materieles/create`, materiel);
  }

  findById(MaterielCode : number): Observable<Materiel> {
    if(MaterielCode){
      return this.http.get<Materiel>(`${this.apiServerUrl}/api/v1/materieles/${MaterielCode}`);
    }
    return of();
  }

  public deleteMateriel(materielId:number):Observable<void> {
    if (materielId) {
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/materieles/delete/${materielId}`);
    }
    return of();
  }
}
