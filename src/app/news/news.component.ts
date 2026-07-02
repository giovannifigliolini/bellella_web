import { Component, OnInit } from '@angular/core';
import { NewsItem, NewsService } from './news.service';

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

  categories: string[] = [];
  selectedCategory = 'All';
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.allNews = this.newsService.getAll();
    this.categories = this.newsService.getCategories();
    this.filterByCategory('All');
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredNews =
      category === 'All'
        ? this.allNews
        : this.allNews.filter((item) => item.category === category);
  }
}
