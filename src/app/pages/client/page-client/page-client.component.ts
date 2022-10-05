import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CltfrsService} from "../../../services/cltfrs/cltfrs.service";
import {Client} from "../../../gs-api/client";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  listClient: Array<Client>=[];
  errorMesg: string='';

  constructor(
    private cltfrsService:CltfrsService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.findAllClient();
  }

  findAllClient():void{
    this.cltfrsService.getClient()
      .subscribe(res=>{
        this.listClient=res;
      });
  }

  nouveauClient():void{
    this.router.navigate(['nouveauClient'])
  }

  handleSuppression(event: any):void {
    if(event === 'succes'){
      this.findAllClient();
    }else {
      this.errorMesg='Something Wrong';
    }
  }
}
