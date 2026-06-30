import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  titoloHeader = 'News';
  paginaHeader = 'News';
  titoloPagina = 'News';
  descrizionePagina =
    "Non perdere le ultime novità di Bellella, dai nuovi piatti in menu alle iniziative speciali. Resta aggiornato sulle nostre offerte e scopri cosa c'è di nuovo da noi!";

  news: any = [
    {
      title: 'Card title 1',
      type: 'New',
      date: '19th Oct, 19',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image: 'assets/images/news/01.jpg',
      id: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
