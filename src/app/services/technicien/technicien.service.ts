import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technicien} from "../../gs-api/technicien";

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getTechnicien(): Observable<Technicien[]>{
    return this.http.get<Technicien[]>(`${this.apiServerUrl}/api/v1/techniciens/all`);
  }

  public addTechnicien(technicien : Technicien): Observable<Technicien>{
    return this.http.post<Technicien>(`${this.apiServerUrl}/api/v1/techniciens/create`, technicien);
  }
}
