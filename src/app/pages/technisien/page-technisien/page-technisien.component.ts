import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Categorie} from "../../../gs-api/categorie";
import {TechnicienService} from "../../../services/technicien/technicien.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Technicien} from "../../../gs-api/technicien";
import {CltfrsService} from "../../../services/cltfrs/cltfrs.service";

@Component({
  selector: 'app-page-technisien',
  templateUrl: './page-technisien.component.html',
  styleUrls: ['./page-technisien.component.scss']
})
export class PageTechnisienComponent implements OnInit {

  listTechnicien: Array<Technicien>=[];
  errorMesg: string='';

  constructor(
    private  cltfrsService:CltfrsService,
    private router :Router
  ) { }

  findAllTechnicien():void{
    this.cltfrsService.getTechnicien()
      .subscribe(res=>{
        this.listTechnicien=res;
      });
  }

  ngOnInit(): void {
    this.findAllTechnicien()
  }


  nouveauTechnicien():void{
    this.router.navigate(['nouveautechnisien'])
  }

  handleSuppression(event: any):void {
    if(event === 'succes'){
      this.findAllTechnicien();
    }else {
      this.errorMesg='Something Wrong';
    }
  }
}
