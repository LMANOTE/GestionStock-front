import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> =
    [
      {
      id :'1',
      titre: 'Tableau de bord',
      icone:'fa fa-line-chart',
      url:'',
      sousMenu:[
        {
          id :'11',
          titre:'Vue d\'ensemble',
          icone:'fa fa-pie-chart',
          url:''
        },
        {
          id :'12',
          titre:'Statistiques',
          icone:'fa fa-bar-chart',
          url:'statistiques'
        }
      ]
    },
      {
        id:'2',
        titre: 'Matériels',
        icone: 'fa fa-cubes',
        url: '',
        sousMenu:[
          {
            id :'21',
            titre:'Matériels',
            icone:'fa fa-cubes',
            url:'materiels'
          },
          {
            id :'22',
            titre:'Mouvements du stock',
            icone:'fa fa-stack-overflow',
            url:'mvstck'
          }
        ]
      },
      {
        id:'3',
        titre: 'Clients',
        icone: 'fa fa-users',
        url: '',
        sousMenu:[
          {
            id :'31',
            titre:'Clients',
            icone:'fa fa-users ',
            url:'clients'
          },
          {
            id :'32',
            titre:'Commande clients',
            icone:'fa fa-shopping-basket',
            url:'commandesclient'
          }
        ]
      },
      {
        id:'4',
        titre: 'Technisien',
        icone: 'fa fa-briefcase',
        url: '',
        sousMenu:[
          {
            id :'41',
            titre:'Technisien',
            icone:'fa fa-briefcase',
            url:'technisiens'
          },
          {
            id :'42',
            titre:'Commande Technisiens',
            icone:'fa fa-truck',
            url:'commandestechnisien'
          }
        ]
      },
      {
        id:'5',
        titre: 'Parametrages',
        icone: 'fa fa-cogs',
        url: '',
        sousMenu:[
          {
            id :'51',
            titre:'Categorie',
            icone:'fa fa-flag',
            url:'categories'
          },
          {
            id :'52',
            titre:'Utilisateurs',
            icone:'fa fa-users ',
            url:'utilisateurs'
          }
        ]
      }
    ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigate(menu: Menu) : void {
      if(this.lastSelectedMenu){
        this.lastSelectedMenu.active=false;
      }
      menu.active=true;
      this.lastSelectedMenu=menu;
      this.router.navigate([menu.url]);
  }
}
