import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { homePizzeriaDescrizione } from './home.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  descrizionePizzeria = homePizzeriaDescrizione;

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



  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
  const elements = document.querySelectorAll(
    '.animate-from-left, .animate-from-right, .animate-from-bottom'
  );

  let hasScrolled = false;

  window.addEventListener('scroll', () => {
    hasScrolled = true;
  }, { once: true });

  const observer = new IntersectionObserver(
    entries => {
      if (!hasScrolled) return; // 👈 BLOCCA il load

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -80px 0px' // 👈 entra un po’ più tardi
    }
  );

  elements.forEach(el => observer.observe(el));
}

}
