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

  descrizione1 = `Bellella è il frutto dell'idea di due giovani ragazzi, Raffaele Marigliano e Giorgio Riccio, che hanno voluto coniugare la bellezza e la bontà della nostra terra. Situata in un'atmosfera calda e accogliente, ispirata alla Napoli antica, qui potrai trascorrere i momenti migliori in tutta tranquillità e spensieratezza. Il nostro team ti accoglierà sempre con il sorriso, sia a pranzo che a cena.`;
  
  descrizione2  = 'Immergetevi nella nostra Pizzeria Napoletana, dove la tradizione e la passione per la vera pizza napoletana prendono vita. Con un\'atmosfera vivace e autentica, vi invitiamo a assaporare le classiche pizze napoletane preparate con ingredienti freschi e genuini. Dalla Margherita alla Marinara, ogni fetta è un viaggio nei sapori delle strade di Napoli. Vi aspettiamo per una vera esperienza culinaria napoletana, sia a pranzo che a cena.';
  
  descrizione3 = 'Immergetevi nell\'atmosfera accogliente e familiare della nostra Trattoria Napoletana Bellella. Con il suo design ispirato ai caratteristici bassi napoletani, vi invitiamo a gustare i piatti della domenica, preparati con amore seguendo le ricette tradizionali della nonna. Dalla Genovese al Ragù, dalla Polpetta alla Parmigiana, ogni piatto vi farà sentire a casa. Vi aspettiamo tutti i giorni per pranzi e cene indimenticabili.';
  
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
