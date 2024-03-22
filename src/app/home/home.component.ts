import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  immagini = [
    {
      foto:'portfolio-1.jpg',
      link:'https://www.instagram.com/p/CjU_D2forkz/',
    },
    {
      foto:'portfolio-2.jpg',
      link:'https://www.instagram.com/p/CikD9SDM6XO/',
    },
    {
      foto:'portfolio-3.jpg',
      link:'https://www.instagram.com/p/CiSCYxUohTe/',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    })
  }

}
