import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  isVisible: boolean = true;

  // descrizione1 = `Bellella nasce dall'idea di due giovani ragazzi, Raffaele Marigliano e Giorgio Riccio con l'obiettivo di abbinare il bello e il buono della nostra Terra. Una location calda e accogliente in stile Napoli antica, dove potrai passare i tuoi momenti migliori nella massima tranquillità e spensieratezza, tra pranzo e cena il nostro team ti accoglierà sempre con il massimo sorriso.`;
  
  // descrizione2 = `Bellella Pizzeria Napoletana ® propone una Pizza Contemporanea realizzata da una accurata scelta di grano utilizzando un blend di farine di TIPO “0” e TIPO “1” con una lievitazione che va dalle 24 alle 36 ore garantendo un prodotto altamente digeribile, soffice e leggero. Un racconto costante del territorio napoletano attraverso i suoi prodotti e le sue tradizionali preparazioni in chiave moderna.`

  // descrizione4 = 'Qui potrai gustare la vera Pizza Napoletana con prodotti di altissima qualità, grazie alla nostra accurata e costante ricerca delle Materie prime Italiane e delle etichette Certificate come DOP, IGP E SLOW FOOD. Oltre alla Pizza, in carta troverete una vasta scelta di fritti Napoletani rivisitati in chiave moderna, tra cui la nostra "frittatina alla carbonara" che nel tempo è riuscita a conquistare tantissime persone diventando il nostro fritto più richiesto.'
 
  // descrizione5 = 'Selezioniamo ingredienti freschi, genuini e di alta qualità. La nostra location dispone di una camera di lievitazione che ha una temperatura controllata, in cui il nostro impasto, realizzato con metodo Biga e composto da un blend di farine, lievita almeno 48 ore. L\'alta tecnologia della camera di lievitazione ci permette di ottenere lo stesso impasto ogni giorno, garantendo la massima qualità ad ogni impasto.'

  descrizione1 = `Bellella è il frutto dell'idea di due giovani ragazzi, Raffaele Marigliano e Giorgio Riccio, che hanno voluto coniugare la bellezza e la bontà della nostra terra. Situata in un'atmosfera calda e accogliente, ispirata alla Napoli antica, qui potrai trascorrere i momenti migliori in tutta tranquillità e spensieratezza. Il nostro team ti accoglierà sempre con il sorriso, sia a pranzo che a cena.`;

  descrizione2 = `Bellella Pizzeria Napoletana ® offre una Pizza Contemporanea realizzata con una selezione accurata di grano e un blend di farine di TIPO “0” e TIPO “1”. La nostra lievitazione, che va dalle 24 alle 36 ore, assicura un prodotto estremamente digeribile, soffice e leggero. Un continuo omaggio al territorio napoletano tramite i suoi prodotti e le sue tradizioni, reinterpretate in chiave moderna.`;

  descrizione4 = `Da noi potrai gustare l'autentica Pizza Napoletana, preparata con ingredienti di altissima qualità. Grazie alla nostra attenta e costante ricerca delle migliori materie prime italiane, incluse quelle con certificazione DOP, IGP e SLOW FOOD. Inoltre, oltre alla pizza, troverai una vasta selezione di fritti napoletani rivisitati in chiave moderna, tra cui la nostra celebre "frittatina alla carbonara", diventata nel tempo il nostro fritto più richiesto.`;

  descrizione5 = `Ci impegniamo a selezionare ingredienti freschi, genuini e di alta qualità. La nostra location è dotata di una camera di lievitazione con temperatura controllata, dove il nostro impasto, preparato con metodo Biga e una miscela di farine, lievita per almeno 48 ore. Grazie alla tecnologia avanzata della camera di lievitazione, otteniamo ogni giorno lo stesso impasto, garantendo la massima qualità in ogni preparazione.`;
  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    })
  }

}
