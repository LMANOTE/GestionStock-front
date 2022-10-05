import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Categorie} from "../../../gs-api/categorie";
import {Materiel} from "../../../gs-api/materiel";
import {MaterielService} from "../../../services/materiel/materiel.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-page-materiel',
  templateUrl: './page-materiel.component.html',
  styleUrls: ['./page-materiel.component.scss']
})
export class PageMaterielComponent implements OnInit {

  listmateriel :Array<Materiel>=[];
  errorMesg='';

  constructor(
    private materielService:MaterielService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.findListMateriel();
  }

  findListMateriel():void{
    this.materielService.getMateriels()
      .subscribe(materiels =>{
        this.listmateriel=materiels;
      });
  }

  nouvelArticle():void{
    this.router.navigate(['nouvelmateriel']);
  }

  handleSuppression(event: any):void {
    if(event === 'succes'){
      this.findListMateriel();
    }else {
      this.errorMesg=event;
    }
  }
}
