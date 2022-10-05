import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  data: [][] = [];
  datacb : [] = [];
  rapportdata : [] = [];
  rapportdatacb2 : [] = [];


  @Input()
  isNouveauVisible=true;
  @Input()
  isExporterVisible=true;
  @Input()
  isImporterVisible=true;

  @Output()
  clickEvent =new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  buttonNouveauClick() : void{
    this.clickEvent.emit();
  }

  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      //console.log(this.data);

      let x = this.data.slice(1);
      //console.log(x);

      //Fill up the comboBox's
      for(let d in this.data[0]) // Target in the first index of data variable 'data[0] = first row'
      {
        this.datacb[d] = this.data[0][d]; // => loop over the data in the array in first row [0][d] => 'd' gonna increment 0 1 2 ..
      }


      //Fill up the comboBox's
      for(let d in this.data[0]) // Target in the first index of data variable 'data[0] = first row'   "" 'chno l fa2ida mn hadi ?'""
      {
        this.rapportdata[d] = this.data[0][d]; // => loop over the data in the array in first row [0][d] => 'd' gonna increment
      }
    };

    reader.readAsBinaryString(target.files[0]);  // kat9ra awal feuille
  }
}
