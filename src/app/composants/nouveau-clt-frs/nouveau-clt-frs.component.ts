import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CltfrsService} from "../../services/cltfrs/cltfrs.service";
import {Technicien} from "../../gs-api/technicien";
import {Client} from "../../gs-api/client";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

  origin='';

  clienttechnicien:any={}
  errorMsg: string;
  imgUrl:string | ArrayBuffer ='assets/img.png';
  file: File | null;

  constructor(
    private router :Router,
    private activateRoute : ActivatedRoute,
    private cltfrsService:CltfrsService
  ) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });

    this.findObject();
  }

  findObject() :void{
    const id=this.activateRoute.snapshot.params['id'];
    if(id){
      if(this.origin === 'client'){
        this.cltfrsService.findClientByid(id)
          .subscribe(client=>{
            this.clienttechnicien=client;
          });
      }else if(this.origin === 'technicien'){
        this.cltfrsService.findTechnicientByid(id)
          .subscribe(technicien=>{
            this.clienttechnicien=technicien;
          });
      }
    }
  }

  cancelClick() :void {
    if(this.origin === 'client'){
      this.router.navigate(['clients'])
    }else if(this.origin === 'technicien'){
      this.router.navigate(['technisiens'])
    }
  }

  saveClick():void {
    if(this.origin === 'client'){
      this.cltfrsService.addClient(this.mapToClient())
        .subscribe(client =>{
          this.router.navigate(['clients']);
        },error => {
          this.errorMsg='Something Wrong';
        });
    }else if(this.origin === 'technicien'){
      this.cltfrsService.addTechnicien(this.mapToTechnicien())
        .subscribe(technicien =>{
          this.router.navigate(['technisiens']);
        },error => {
          this.errorMsg='Something Wrong';
        });
    }
  }

  mapToClient():Client{
    const client :Client={
      id:this.clienttechnicien.id,
      nom:this.clienttechnicien.nom,
      email:this.clienttechnicien.email,
      prenom:this.clienttechnicien.prenom,
      codePostal:this.clienttechnicien.codePostal,
      ville:this.clienttechnicien.ville,
      num_tele:this.clienttechnicien.num_tele,
      pays:this.clienttechnicien.pays,
      adresse1:this.clienttechnicien.adresse1
    }
    return client
  }
  mapToTechnicien():Technicien{
    const technicien :Technicien={
      id:this.clienttechnicien.id,
      nom:this.clienttechnicien.nom,
      email:this.clienttechnicien.email,
      prenom:this.clienttechnicien.prenom,
      codePostal:this.clienttechnicien.codePostal,
      ville:this.clienttechnicien.ville,
      num_tele:this.clienttechnicien.num_tele,
      pays:this.clienttechnicien.pays,
      adresse1:this.clienttechnicien.adresse1
    }
    return technicien;
  }

  OnFileInput(files: FileList | null) : void{
    if (files){
      this.file=files.item(0);
      if(this.file){
        const fileReader =new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload=(event)=> {
          if(fileReader.result){
            this.imgUrl=fileReader.result;
          }
        };
      }
    }
  }
}
