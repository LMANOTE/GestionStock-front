import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Materiel} from "../../gs-api/materiel";
import {HttpErrorResponse} from "@angular/common/http";
import {CategorieService} from "../../services/categorie/categorie.service";
import {Router} from "@angular/router";
import {MaterielService} from "../../services/materiel/materiel.service";
import {Categorie} from "../../gs-api/categorie";
import {PageMaterielComponent} from "../../pages/materiels/page-materiel/page-materiel.component";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  materiel :Materiel ={}
  @Output()
  suppressionResult = new EventEmitter;
  selectedMatIdToDelete?:number =-1;

  constructor(
    private router:Router,
    private materielService:MaterielService
  ){}

  ngOnInit(): void {
  }



  modifierMateriel() {
    this.router.navigate(['nouvelmateriel',this.materiel.codeMateriel]);
    console.log(this.materiel.codeMateriel);
  }

  confirmeretSupprimerMateriel() :void{
    if(this.materiel.codeMateriel){
      this.materielService.deleteMateriel(this.materiel.codeMateriel)
        .subscribe(res=>{
          this.suppressionResult.emit('succes')
        },error => {
          this.suppressionResult.emit('failed')
          });
    }
  }

}
