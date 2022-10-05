import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../gs-api/client";
import {Router} from "@angular/router";
import {CltfrsService} from "../../services/cltfrs/cltfrs.service";

@Component({
  selector: 'app-detail-ctl-frs',
  templateUrl: './detail-ctl-frs.component.html',
  styleUrls: ['./detail-ctl-frs.component.scss']
})
export class DetailCtlFrsComponent implements OnInit {

  @Input()
  origin ='';

  @Input()
  clientTechnicien:any={};

  @Output()
  suppressionResult = new EventEmitter;

  constructor(
    private router:Router,
    private cltfrsService:CltfrsService
  ) { }

  ngOnInit(): void {
  }

  modifierCltTech() : void{
    console.log(this.origin);
    if(this.origin === 'client'){
      this.router.navigate(['nouveauClient',this.clientTechnicien.id]);
      console.log(this.clientTechnicien.id);
    }else if(this.origin === 'technicien'){
      this.router.navigate(['nouveautechnisien',this.clientTechnicien.id]);
      console.log(this.clientTechnicien.id);
    }
  }

  confirmeretSupprimer() : void{
    if(this.origin === 'client'){
      this.cltfrsService.deleteClient(this.clientTechnicien.id)
        .subscribe(res=>{
          this.suppressionResult.emit('succes')
        },error => {
          this.suppressionResult.emit('failed')
        });
    }else if(this.origin === 'technicien'){
      this.cltfrsService.deleteTechnicien(this.clientTechnicien.id)
        .subscribe(res=>{
          this.suppressionResult.emit('succes')
        },error => {
          this.suppressionResult.emit('failed')
        });
    }
  }
}
