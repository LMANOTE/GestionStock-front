import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../gs-api/client";
import {CltfrsService} from "../../services/cltfrs/cltfrs.service";
import {Materiel} from "../../gs-api/materiel";
import {MaterielService} from "../../services/materiel/materiel.service";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = '';
  selectedclientTechnicien:Client={}
  ListClientTechnicien:Array<Client>=[];
  searchedMateriel:Materiel={}
  materielErrorMsg: string;
  codeMateriel =0;
  quantie='';

  constructor(
    private activateRoute :ActivatedRoute,
    private cltTechnicienService:CltfrsService,
    private materielService:MaterielService
  ) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });
    this.findAll();
  }

  findAll() :void{
    if(this.origin === 'client'){
     this.cltTechnicienService.getClient()
       .subscribe(clients=>{
          this.ListClientTechnicien=clients;
       });
    }else if(this.origin === 'technicien'){
      this.cltTechnicienService.getTechnicien()
        .subscribe(techniciens=>{
          this.ListClientTechnicien=techniciens;
        });
    }
  }

  findMaterielByCode(codeMateriel :number): void{
    if(codeMateriel){
      this.materielService.findById(codeMateriel)
        .subscribe(materiel=>{
          this.searchedMateriel=materiel;
        },error => {
          this.materielErrorMsg='Aucun code Materiel n a éte trouvé dans bdd';
          });
    }
  }

  searchMateriel():void {
    this.findMaterielByCode(this.codeMateriel);
  }

  AjouterLigneCommande():void {
  }
}
