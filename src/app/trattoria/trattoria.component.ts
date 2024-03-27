import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trattoria',
  templateUrl: './trattoria.component.html',
  styleUrls: ['./trattoria.component.scss']
})
export class TrattoriaComponent implements OnInit {

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

  descrizione1 = 'Siete pronti ad entrare in un mondo di Napoletanità e Qualità? Asstatv e facitne salute! Bellella Trattoria Napoletana nasce dalla Passione per la cucina antica Napoletana e dal Fascino dei vicoli di Napoli. Bellella è progettata con un Design caratteristico dei bassi napoletani, pronti a coccolarvi in un\' atmosfera calda e accogliente. La nostra è la tipica cucina della Domenica a casa della Nonna, dalla Genovese al Ragù, dalla Polpetta alla Parmigiana, serviti nei famosi pentolini di rame. BELLELLA vi aspetta tutti i giorni nei suoi locali, a pranzo come a cena.';

  descrizione1foot = 'SCUGNIZZO (O\' scugnizz\') La parola "scugnizzo" indica, dalla fine dell\'Ottocento, il «monello di strada» napoletano, è un termine della lingua napoletana, poi entrato nell\'uso anche in italiano. Gli scugnizzi sono bambini nati e cresciuti nei vicoli dei quartieri, spesso senza famiglia, fuggiti dagli orfanotrofi e dai collegi, ragazzi astuti, intelligenti e vivaci, disposti ad «arrangiarsi» con espedienti anche scarsamente onesti perché la vita, in strada, è fatta di espedienti e sopravvivenza.';

  descrizione2 = `Benvenuto alla Trattoria Napoletana, un luogo magico dove la tradizione e la convivialità si incontrano per offrirti un'esperienza culinaria autentica. Qui potrai gustare i sapori genuini della cucina napoletana, preparata con ingredienti freschi e stagionali, seguendo le ricette tramandate di generazione in generazione direttamente dai quartieri di Napoli. Ogni boccone è un viaggio che ti porta a scoprire i sapori e le tradizioni di questa affascinante città, regalandoti un'esperienza culinaria unica e indimenticabile.`;

  descrizione3 = `Ti invitiamo a entrare nella Trattoria Napoletana, dove l'atmosfera accogliente e familiare ti farà sentire a casa fin dal primo istante. Le pareti della nostra trattoria sono decorate con foto dei quartieri di Napoli, mentre i numeri della tombola aggiungono un tocco di nostalgia e divertimento all'ambiente. Concediti il piacere di immergerti completamente nell'atmosfera vivace e allegra della tradizione napoletana mentre assapori i nostri deliziosi piatti e ti godi la compagnia dei tuoi cari.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
