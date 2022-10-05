import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Materiel} from "../../gs-api/materiel";
import {Utilisateur} from "../../gs-api/utilisateur";
import {Router} from "@angular/router";
import {MaterielService} from "../../services/materiel/materiel.service";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {


  @Input()
  utilisateur :Utilisateur ={}
  @Output()
  suppressionResult = new EventEmitter;
  selectedMatIdToDelete?:number =-1;

  constructor(
    private router:Router,
    private utilisateurService:UtilisateurService
  ) { }

  ngOnInit(): void {
  }

  modifierUtilisateur() {
    this.router.navigate(['nouvelutilisateurs',this.utilisateur.id]);
  }


  confirmeretSupprimerUtilisateur():void{
    if(this.utilisateur.id){
      this.utilisateurService.deleteUtilisateur(this.utilisateur.id)
        .subscribe(res=>{
          this.suppressionResult.emit('succes')
        },error => {
          this.suppressionResult.emit('failed')
        });
    }
  }
}
