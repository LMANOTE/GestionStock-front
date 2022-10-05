import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Materiel} from "../../../gs-api/materiel";
import {MaterielService} from "../../../services/materiel/materiel.service";
import {Categorie} from "../../../gs-api/categorie";
import {HttpErrorResponse} from "@angular/common/http";
import {CategorieService} from "../../../services/categorie/categorie.service";

@Component({
  selector: 'app-nouvel-materiel',
  templateUrl: './nouvel-materiel.component.html',
  styleUrls: ['./nouvel-materiel.component.scss']
})
export class NouvelMaterielComponent implements OnInit {

  materiel:Materiel={};
  categorie:Categorie={};
  listcategorie:Array<Categorie>=[];
  imgUrl:string | ArrayBuffer ='assets/img.png';
  file:File | null = null;

  constructor(
    private materielService:MaterielService,
    private activatedRoute:ActivatedRoute,
    private categorieService:CategorieService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.categorieService.getCategorie()
      .subscribe(categories =>{
      this.listcategorie=categories;
      this.categorie=this.materiel.categorie ? this.materiel.categorie : {};
      });

    const  idMateriel = this.activatedRoute.snapshot.params['idMateriel'];
    if(idMateriel){
      this.materielService.findById(idMateriel)
        .subscribe(mat =>{
          this.materiel=mat;
          this.categorie=this.materiel.categorie ? this.materiel.categorie : {};
        });
    }

  }

  public enregistrerMateriel():void{
    this.materiel.categorie=this.categorie;
    console.log(this.materiel);
    this.materielService.addMateriel(this.materiel)
      .subscribe((mat)=>{
        this.router.navigate(['materiels'])
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  cancel() :void{
    this.router.navigate(['materiels'])
  }

  change(e: any) {
    this.categorie.id=e.target.value;
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
