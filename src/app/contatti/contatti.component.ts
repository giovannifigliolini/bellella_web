import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  titolo = "Le nostre sedi";
  titoloHeader="Sedi";
  paginaHeader="Sedi";

  products = [
    {
      title : 'QUARTO',
      description : 'Corso Italia 65',
      description2 : '081 1878 9054',
      imgName : 'quarto_sede.jpeg'
    },
    {
      title : 'VARCATURO - TAKE AWAY',
      description : 'Via Madonna del Pantano 76',
      description2 : '081 1802 7919',
      imgName : 'varcaturo_sede.jpeg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
