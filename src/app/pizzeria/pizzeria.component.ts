import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent implements OnInit {

  portfolio = [
    {
      path: 'assets/img/trattoria/trattoria_1.jpeg',
    },
    {
      path: 'assets/img/trattoria/trattoria_2.jpeg',
    },
    {
      path: 'assets/img/trattoria/trattoria_3.jpeg',
    },
    {
      path: 'assets/img/trattoria/trattoria_4.jpeg',
    },
    {
      path: 'assets/img/trattoria/trattoria_5.jpeg',
    },
    {
      path: 'assets/img/trattoria/trattoria_6.jpeg',
    },
  ];

  descrizione1 = `Bellella è il frutto dell'idea di due giovani ragazzi, Raffaele Marigliano e Giorgio Riccio, che hanno voluto coniugare la bellezza e la bontà della nostra terra. Situata in un'atmosfera calda e accogliente, ispirata alla Napoli antica, qui potrai trascorrere i momenti migliori in tutta tranquillità e spensieratezza. Il nostro team ti accoglierà sempre con il sorriso, sia a pranzo che a cena.`;

  descrizione2 = `Bellella Pizzeria Napoletana ® offre una Pizza Contemporanea realizzata con una selezione accurata di grano e un blend di farine di TIPO “0” e TIPO “1”. La nostra lievitazione, che va dalle 24 alle 36 ore, assicura un prodotto estremamente digeribile, soffice e leggero. Un continuo omaggio al territorio napoletano tramite i suoi prodotti e le sue tradizioni, reinterpretate in chiave moderna.`;

  descrizione3 = `Da noi potrai gustare l'autentica Pizza Napoletana, preparata con ingredienti di altissima qualità. Grazie alla nostra attenta e costante ricerca delle migliori materie prime italiane, incluse quelle con certificazione DOP, IGP e SLOW FOOD. Inoltre, oltre alla pizza, troverai una vasta selezione di fritti napoletani rivisitati in chiave moderna, tra cui la nostra celebre "frittatina alla carbonara", diventata nel tempo il nostro fritto più richiesto.`;

  descrizione4 = `Ci impegniamo a selezionare ingredienti freschi, genuini e di alta qualità. La nostra location è dotata di una camera di lievitazione con temperatura controllata, dove il nostro impasto, preparato con metodo Biga e una miscela di farine, lievita per almeno 48 ore. Grazie alla tecnologia avanzata della camera di lievitazione, otteniamo ogni giorno lo stesso impasto, garantendo la massima qualità in ogni preparazione.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
