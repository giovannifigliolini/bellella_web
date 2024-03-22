import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-header',
  templateUrl: './photo-header.component.html',
  styleUrls: ['./photo-header.component.scss']
})
export class PhotoHeaderComponent implements OnInit {

  @Input() titolo !: any;

  @Input() pagina !: any;

  constructor() { }

  ngOnInit(): void {
  }

}
