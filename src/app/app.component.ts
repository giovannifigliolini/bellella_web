import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bellella';

  backToTop(){
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    })
  }
}
