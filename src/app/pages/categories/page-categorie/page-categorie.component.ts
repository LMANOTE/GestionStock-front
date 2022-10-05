import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {Categorie} from "../../../gs-api/categorie";
import {HttpErrorResponse} from "@angular/common/http";
import {Materiel} from "../../../gs-api/materiel";

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {

   listcategorie:Array<Categorie>=[];
   selectedCatIdToDelete?:number =-1;
   errorMsg='';

  constructor(
    private categorieService : CategorieService,
    private router:Router) { }

  ngOnInit(): void {
    this.getallCategorie();
  }
  getallCategorie() :void{
    this.categorieService.getCategorie()
      .subscribe(categories =>{
        this.listcategorie=categories;
      });
  }
  nouvelCategorie() : void{
    this.router.navigate(['nouvelCategorie']);
  }

  modifierCategorie(id:number):void {
    this.router.navigate(['nouvelCategorie',id]);
  }

  confirmeretSupprimerCat(): void{
    if(this.selectedCatIdToDelete!==-1){
      this.categorieService.deleteCategorie(this.selectedCatIdToDelete!)
        .subscribe(res=>{
          this.getallCategorie();
      },error => {
        this.errorMsg='impossible de supprimer cette categorie qui ete deja utilise';
      });
    }
  }

  annulerSuppresionCat() : void{
    this.selectedCatIdToDelete=-1;
  }

  selectcatPourSupprimer(id?: number) : void{
      this.selectedCatIdToDelete=id;
  }
}
