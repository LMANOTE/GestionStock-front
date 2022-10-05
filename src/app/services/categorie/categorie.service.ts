import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Categorie} from "../../gs-api/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/api/v1/categories/all`);
  }

  public addCategorie(categorie : Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(`${this.apiServerUrl}/api/v1/categories/create`, categorie);
  }

   findByid(idCategorie : number): Observable<Categorie>{
    return this.http.get<Categorie>(`${this.apiServerUrl}/api/v1/categories/${idCategorie}`);
  }

  public deleteCategorie(categorieId:number):Observable<void>{
    if(categorieId){
      return this.http.delete<void>(`${this.apiServerUrl}/api/v1/categories/delete/${categorieId}`);
    }
    return of();
  }
}
