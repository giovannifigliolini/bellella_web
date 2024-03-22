import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  isVisible: boolean = true;

  descrizione1 = `Bellella Pizzeria Napoletana ® nasce dall'idea di due giovani pizzaioli napoletani, Giorgio Riccio e Raffaele Marigliano. Dopo anni di gavetta ed esperienze maturate fin dalla giovane età, decidono di aprire la prima sede di Bellella in provincia di Napoli a Quarto del 2021. Qui fin dal primo momento si evince la volontà di fondere Tradizione e Innovazione in ogni loro proposta. Nel 2022 dato il forte successo e la grande affluenza nella prima sede, il progetto si espande nella nuova sede "take away" di Varcaturo dove diventa possibile assaporare tutto il mondo Bellella direttamente a casa. `;
  
  descrizione2 = `Bellella Pizzeria Napoletana ® propone una Pizza Contemporanea realizzata da una accurata scelta di grano utilizzando un blend di farine di TIPO “0” e TIPO “1” con una lievitazione che va dalle 24 alle 36 ore garantendo un prodotto altamente digeribile, soffice e leggero. Un racconto costante del territorio napoletano attraverso i suoi prodotti e le sue tradizionali preparazioni in chiave moderna.`

  descrizione3 = 'Una location calda e accogliente,in vero stile Napoletano. Il progetto si sviluppa anche nel mito di tante celebrità del panorama napoletano, che accompagnano ogni angolo del locale, richiamando più volte il carattere partenopeo della pizzeria.'

  descrizione4 = 'Qui potrai gustare la vera Pizza Napoletana con prodotti di altissima qualità, grazie alla nostra accurata e costante ricerca delle Materie prime Italiane e delle etichette Certificate come DOP, IGP E SLOW FOOD. Oltre alla Pizza, in carta troverete una vasta scelta di fritti Napoletani rivisitati in chiave moderna, tra cui la nostra "frittatina alla carbonara" che nel tempo è riuscita a conquistare tantissime persone diventando il nostro fritto più richiesto.'
 
  descrizione5 = 'Di volta in volta potrete trovare proposte del giorno e dolci tradizionali. Il tutto sarà accompagnato da una Carta dei vini, Birra alla Spina e una selezione di Birre artigianali tra cui la nostra ultima arrivata nata da una collaborazione con " KBirr " KBirr deriva dall\'esclamazione partenopea di gioia, che evoca l\'immediatezza, la spontaneità e la passione di questa birra: Caspita, che birr!.'

  descrizione6 = 'Scopri la nostra ultima arrivata, una pizza nata da una collaborazione con " Casa Surace" . Siamo lieti di presentarvi la nostra "Pizza da giù" : Montanara fritta e ripassata al forno con ragù cotto a bassa temperatura 8 ore con carne, caciocavallo e basilico. Puoi trovarla nella nostra sede di Quarto. Resta sintonizzato sui nostri canali social per scoprire tutte le novità e proposte del giorno.'
 
  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    })
  }

}
