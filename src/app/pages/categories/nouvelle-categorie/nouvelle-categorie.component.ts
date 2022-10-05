import { Component, OnInit } from '@angular/core';
  import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {Categorie} from "../../../gs-api/categorie";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

   categorie:Categorie={};

  constructor(
    private categorieService:CategorieService,
    private activatedRoute:ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit(): void {
    const  idCategorie = this.activatedRoute.snapshot.params['idCategorie'];
    if(idCategorie){
      this.categorieService.findByid(idCategorie)
        .subscribe(cat =>{
          this.categorie=cat;
        });
    }
  }

  public enregistrerCategorie():void{
    this.categorieService.addCategorie(this.categorie)
      .subscribe(res=>{
        this.router.navigate(['categories'])
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  cancel() {
    this.router.navigate(['categories'])
  }
}
