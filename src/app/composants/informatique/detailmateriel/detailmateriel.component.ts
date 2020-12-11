import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'wad-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean=false;
  id:string ='2';
  materiel:Materiel[];
   onAffiche(){
     this.afficher=!this.afficher;
   }
   
  constructor(private materielidService:MaterielService) {
   }

  ngOnInit(): void {
    this.materiel=this.materielidService.getMaterielById('2');
  }
  
}


