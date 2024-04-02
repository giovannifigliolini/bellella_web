import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent {

  titolo = "I nostri piatti piu' richiesti";
  titoloHeader="La nostra storia";
  paginaHeader="Chi siamo";

  products = [
    {
      title : 'Parmigiana',
      description : 'Pizza',
      imgName : 'card1.jpeg'
    },
    {
      title : 'Frittatina alla carbonara',
      description : 'Starter',
      imgName : 'card2.jpeg'
    },
    {
      title : 'Crocchè pistacchio e mortadella',
      description : 'Starter',
      imgName : 'card3.jpeg'
    },
    {
      title : 'Porchetta',
      description : 'Pizza',
      imgName : 'card4.jpeg'
    }
  ]

  constructor() { }



}
