import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent{
  titoloHeader = "I nostri menu'";
  paginaHeader = "Menu'";

  varcaturo = [
    {
      path: 'assets/img/Varcaturo/varcaturo_1.jpeg',
    },
    {
      path: 'assets/img/Varcaturo/varcaturo_2.jpeg',
    },
    {
      path: 'assets/img/Varcaturo/varcaturo_3.jpeg',
    },
    {
      path: 'assets/img/Varcaturo/varcaturo_4.jpeg',
    },
    {
      path: 'assets/img/Varcaturo/varcaturo_5.jpeg',
    },
    {
      path: 'assets/img/Varcaturo/varcaturo_6.jpeg',
    },
  ];

  quarto = [
    {
      path: 'assets/img/Quarto/quarto_1.jpeg',
    },
    {
      path: 'assets/img/Quarto/quarto_2.jpeg',
    },
    {
      path: 'assets/img/Quarto/quarto_3.jpeg',
    },
    {
      path: 'assets/img/Quarto/quarto_4.jpeg',
    },
    {
      path: 'assets/img/Quarto/quarto_5.jpeg',
    },
    {
      path: 'assets/img/Quarto/quarto_6.jpeg',
    },
  ];

  constructor() {}

}
