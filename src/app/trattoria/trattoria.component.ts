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

  constructor() { }

  ngOnInit(): void {
  }

}
