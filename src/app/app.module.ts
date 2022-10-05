import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageMaterielComponent } from './pages/materiels/page-materiel/page-materiel.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { NouvelMaterielComponent } from './pages/materiels/nouvel-materiel/nouvel-materiel.component';
import { PageMvstckComponent } from './pages/mvstck/page-mvstck/page-mvstck.component';
import { DetatilMvtStkMaterielComponent } from './composants/detatil-mvt-stk-materiel/detatil-mvt-stk-materiel.component';
import { DetailMvtStckComponent } from './composants/detail-mvt-stck/detail-mvt-stck.component';
import { DetailCtlFrsComponent } from './composants/detail-ctl-frs/detail-ctl-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageTechnisienComponent } from './pages/technisien/page-technisien/page-technisien.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DeatailCmdCltFrsComponent } from './composants/deatail-cmd-clt-frs/deatail-cmd-clt-frs.component';
import { DeatailCmdComponent } from './composants/deatail-cmd/deatail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfileComponent } from './pages/profile/page-profile/page-profile.component';
import { ChangerMotDePasseComponent } from './pages/profile/changer-mot-de-passe/changer-mot-de-passe.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './composants/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { LoaderComponent } from './composants/loader/loader.component';
import { PagetestComponent } from './pages/pagetest/pagetest.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashbordComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageMaterielComponent,
    DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelMaterielComponent,
    PageMvstckComponent,
    DetatilMvtStkMaterielComponent,
    DetailMvtStckComponent,
    DetailCtlFrsComponent,
    PageClientComponent,
    PageTechnisienComponent,
    NouveauCltFrsComponent,
    DeatailCmdCltFrsComponent,
    DeatailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfileComponent,
    ChangerMotDePasseComponent,
    FooterComponent,
    LoaderComponent,
    PagetestComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
