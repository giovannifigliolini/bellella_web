import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsItem, NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  news?: NewsItem;
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (isNaN(id)) {
      this.router.navigate(['/news']);
      return;
    }

    this.news = this.newsService.getById(id);
  }

  get activeImage(): string | undefined {
    return this.news?.images?.[this.currentImageIndex];
  }

  showPrevious(): void {
    if (!this.news) {
      return;
    }
    this.currentImageIndex =
      this.currentImageIndex > 0
        ? this.currentImageIndex - 1
        : this.news.images.length - 1;
  }

  showNext(): void {
    if (!this.news) {
      return;
    }
    this.currentImageIndex =
      this.currentImageIndex < this.news.images.length - 1
        ? this.currentImageIndex + 1
        : 0;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}
