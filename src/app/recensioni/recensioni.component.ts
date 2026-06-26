import { Component } from '@angular/core';

interface Recensione {
  iniziali: string;
  stelle: number;
  testo: string;
  data: string;
}

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrls: ['./recensioni.component.scss'],
})
export class RecensioniComponent {
  titoloHeader = 'Recensioni';
  paginaHeader = 'Recensioni';

  readonly TA_PIZZERIA_URL =
    'https://www.tripadvisor.it/Restaurant_Review-g2209766-d25261373-Reviews-Bellella_Pizzeria_Napoletana-Quarto_Province_of_Naples_Campania.html';
  readonly TA_PIZZERIA_WRITE_URL =
    'https://www.tripadvisor.it/UserReview-g2209766-d25261373-Bellella_Pizzeria_Napoletana-Quarto_Province_of_Naples_Campania.html';

  // Aggiornare con URL TripAdvisor della Trattoria
  readonly TA_TRATTORIA_URL = 'https://www.tripadvisor.it/';
  readonly TA_TRATTORIA_WRITE_URL = 'https://www.tripadvisor.it/';

  readonly GOOGLE_PIZZERIA_URL =
    'https://www.google.com/maps/search/Bellella+Pizzeria+Napoletana+Quarto+NA';
  readonly GOOGLE_TRATTORIA_URL =
    'https://www.google.com/maps/search/Bellella+Trattoria+Napoletana+Quarto+NA';

  recensioniPizzeria: Recensione[] = [
    {
      iniziali: 'G.M.',
      stelle: 5,
      testo:
        'Pizza napoletana autentica! Il cornicione è alto, soffice e profumato come si deve. Ho provato la marinara e la diavola: entrambe perfette. Il fritto misto è una bomba. Tornerò sicuramente.',
      data: '2 settimane fa',
    },
    {
      iniziali: 'A.R.',
      stelle: 5,
      testo:
        'Finalmente una vera pizza napoletana! La margherita con fior di latte scioglie in bocca. Impasto a lunga lievitazione, si sente la differenza. Locale accogliente e personale gentilissimo.',
      data: '1 mese fa',
    },
    {
      iniziali: 'F.C.',
      stelle: 5,
      testo:
        'Esperienza fantastica. La pizza aveva esattamente quel sapore che cercavo: cornicione alveolato, pomodoro fresco, mozzarella filante. Consiglio anche le frittatine. Da provare assolutamente!',
      data: '2 mesi fa',
    },
  ];

  recensioniTrattoria: Recensione[] = [
    {
      iniziali: 'M.T.',
      stelle: 5,
      testo:
        'La genovese era da sogno — sugo ricco e pasta al dente, un connubio perfetto. Il pane fatto in casa era la ciliegina sulla torta. Ambiente familiare e caldo, ci si sente a casa.',
      data: '3 settimane fa',
    },
    {
      iniziali: 'S.P.',
      stelle: 5,
      testo:
        'Cucina napoletana autentica come quella della nonna. Le polpette al ragù erano fantastiche, il dolce della casa una vera sorpresa. Porzioni generose e prezzi più che onesti.',
      data: '1 mese fa',
    },
    {
      iniziali: 'L.V.',
      stelle: 5,
      testo:
        'Un posto che consiglio a tutti gli amanti della cucina campana. Gli spaghetti alle vongole erano freschissimi e saporiti. Il personale ci ha fatto sentire benvenuti fin dal primo momento.',
      data: '2 mesi fa',
    },
  ];

  starsArray(n: number): number[] {
    return Array(n).fill(0);
  }
}
