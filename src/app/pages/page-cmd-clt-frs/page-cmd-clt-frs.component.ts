import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit {

  origin ='';

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe( data => {
      this.origin = data['origin'];
    })
  }

  nouvellecommande():void {
    if (this.origin == 'client'){
      this.router.navigate(['nouvellecommandeclt'])
    }else if (this.origin =='technicien'){
      this.router.navigate(['nouvellecommandetch'])
    }
  }
}
