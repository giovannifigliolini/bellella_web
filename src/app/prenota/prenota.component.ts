import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.scss']
})
export class PrenotaComponent implements OnInit {
  titoloHeader = 'Prenota';
  paginaHeader = 'Prenota';

  constructor() { }

  ngOnInit(): void {
  }

}
