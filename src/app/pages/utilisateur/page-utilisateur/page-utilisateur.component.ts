import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Utilisateur} from "../../../gs-api/utilisateur";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {

  listutilisateur :Array<Utilisateur>=[];
  errorMesg='';

  constructor(
    private utilisateurService:UtilisateurService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.findListUtilisateur();
  }

  nouvelUtilisateur() : void{
    this.router.navigate(['nouvelutilisateurs'])
  }

  private findListUtilisateur():void {
    this.utilisateurService.getUtilisateurs()
      .subscribe(utilisateur =>{
        this.listutilisateur=utilisateur;
      });
  }

  handleSuppression(event: any):void {
    if(event === 'succes'){
      this.findListUtilisateur();
    }else {
      this.errorMesg=event;
    }
  }
}
