import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashbordComponent} from "./pages/page-dashbord/page-dashbord.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageMaterielComponent} from "./pages/materiels/page-materiel/page-materiel.component";
import {NouvelMaterielComponent} from "./pages/materiels/nouvel-materiel/nouvel-materiel.component";
import {PageMvstckComponent} from "./pages/mvstck/page-mvstck/page-mvstck.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageTechnisienComponent} from "./pages/technisien/page-technisien/page-technisien.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PageCategorieComponent} from "./pages/categories/page-categorie/page-categorie.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfileComponent} from "./pages/profile/page-profile/page-profile.component";
import {ChangerMotDePasseComponent} from "./pages/profile/changer-mot-de-passe/changer-mot-de-passe.component";
import {ApplicationGuardService} from "./services/guard/application-guard.service";
import {PagetestComponent} from "./pages/pagetest/pagetest.component";

const routes: Routes = [
  {
    path : 'login',
    component:PageLoginComponent
  },
  {
    path : 'logintest',
    component:PagetestComponent
  },
  {
    path : 'inscrire',
    component:PageInscriptionComponent
  },
  {
    path:'',
    component:PageDashbordComponent,
    canActivate:[ApplicationGuardService],
    children : [
      {
        path : 'statistiques',
        component:PageStatistiquesComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'materiels',
        component:PageMaterielComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelmateriel',
        component:NouvelMaterielComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelmateriel/:idMateriel',
        component:NouvelMaterielComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'mvstck',
        component:PageMvstckComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'clients',
        component:PageClientComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouveauClient',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path: 'nouveauClient/:id',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path: 'commandesclient',
        component:PageCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component:NouvelleCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path: 'technisiens',
        component:PageTechnisienComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouveautechnisien',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'technicien'
        }
      },
      {
        path: 'nouveautechnisien/:id',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'technicien'
        }
      },
      {
        path: 'commandestechnisien',
        component:PageCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'technicien'
        }
      },
      {
        path: 'nouvellecommandetch',
        component:NouvelleCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin :'technicien'
        }
      },
      {
        path: 'categories',
        component:PageCategorieComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelCategorie',
        component:NouvelleCategorieComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelCategorie/:idCategorie',
        component:NouvelleCategorieComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'utilisateurs',
        component:PageUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateurs',
        component:NouvelUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateurs/:idUtilisateur',
        component:NouvelUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'profil',
        component:PageProfileComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component:ChangerMotDePasseComponent,
        canActivate:[ApplicationGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
