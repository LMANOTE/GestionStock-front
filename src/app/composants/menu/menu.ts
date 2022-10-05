
export interface Menu{
  id?:String;
  titre?: String;
  icone?: String;
  url?: String;
  active? :boolean;
  sousMenu?:Array<Menu>;
}
