import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    })
  }

}
