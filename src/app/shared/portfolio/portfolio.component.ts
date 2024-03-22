import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input() title!: string;
  @Input() portfolio !: any[];
  @Input() tavolo = false;

  constructor() {}

  ngOnInit(): void {}
}
