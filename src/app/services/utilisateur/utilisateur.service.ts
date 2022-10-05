import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Utilisateur} from "../../gs-api/utilisateur";


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getUtilisateurs(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.apiServerUrl}/api/v1/utilisateurs/all`);
  }

  public addUtilisateur(utilisateur : Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/v1/utilisateurs/create`, utilisateur);
  }

  findById(UtilisateurCode : number): Observable<Utilisateur> {
    if(UtilisateurCode){
      return this.http.get<Utilisateur>(`${this.apiServerUrl}/api/v1/utilisateurs/${UtilisateurCode}`);
    }
    return of();
  }

  public deleteUtilisateur(utilisateurId:number):Observable<void> {
    if (utilisateurId) {
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/utilisateurs/delete/${utilisateurId}`);
    }
    return of();
  }
}
