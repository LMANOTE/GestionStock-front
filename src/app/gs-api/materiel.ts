import {Categorie} from "./categorie";

export interface Materiel{
  codeMateriel?:number;
  designation?:string;
  numeroSerie?:string;
  marque?:string;
  photo?:string;
  model?:number;
  categorie?: Categorie;
}
