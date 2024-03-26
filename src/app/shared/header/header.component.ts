import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  showMenu = false;

  sub: Subscription

  constructor(private router: Router) {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        map(event => event as NavigationStart),  // appease typescript
      )
      .subscribe(
        event => {
          if (event.url === '/home' || event.url === '/')
            this.showMenu = false;
          else
            this.showMenu = true;

        }
      );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
