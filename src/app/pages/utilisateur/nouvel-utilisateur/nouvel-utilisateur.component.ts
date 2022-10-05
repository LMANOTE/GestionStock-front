import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../../gs-api/utilisateur";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit {

  utilisateur:Utilisateur={};

  constructor(
    private utilisateurService:UtilisateurService,
    private activatedRoute:ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit(): void {
    const  idUtilisateur = this.activatedRoute.snapshot.params['idUtilisateur'];
    if(idUtilisateur){
      this.utilisateurService.findById(idUtilisateur)
        .subscribe(user =>{
          this.utilisateur=user;
        });
    }
  }

  public enregistrerUtilisateur():void{
    this.utilisateurService.addUtilisateur(this.utilisateur)
      .subscribe((mat)=>{
          this.router.navigate(['utilisateurs'])
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )
  }

  cancel():void {
    this.router.navigate(['materiels'])
  }
}
