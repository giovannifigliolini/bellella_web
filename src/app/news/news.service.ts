import { Injectable } from '@angular/core';

export interface NewsItem {
    id: number;
    title: string;
    category: string;
    date: string;
    teaser: string;
    images: string[];
    contentHtml: string;
}

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    private news: NewsItem[] = [
        {
            id: 1,
            title: "Apertura d'autunno: nuovi sapori in arrivo",
            category: 'Eventi',
            date: '15 ottobre 2026',
            teaser:
                'Scopri la nuova formula di stagione pensata per i nostri clienti: pizza, trattoria e serate speciali nella vista di Quarto.',
            images: ['assets/img/news/news_1.jpeg'],
            contentHtml: `
        <p>Siamo entusiasti di annunciare che Pizzeria Bellella sta per aprire le sue porte anche nel comune di <strong>Quarto</strong>, portando con sé tutta la passione, la qualità e l’autenticità che da sempre ci contraddistinguono.</p>
        <p>La nuova location, pensata per accogliere fino a <strong>120</strong> posti a sedere, è stata progettata per offrire un ambiente caldo, accogliente e curato nei minimi dettagli, ideale sia per una cena in famiglia che per una serata tra amici. Ogni elemento è stato studiato per garantire comfort e un’esperienza piacevole, dove tradizione e convivialità si incontrano.</p>
        <p>Nel nostro nuovo locale continueremo a proporre le nostre pizze preparate con ingredienti selezionati, impasti lavorati con cura e una grande attenzione alla qualità, nel rispetto della tradizione ma con uno sguardo sempre attento all’innovazione.</p>
        <p>Questa nuova apertura rappresenta per noi un passo importante e non vediamo l’ora di condividere con voi questo nuovo spazio, dove il gusto, la passione e l’ospitalità saranno sempre al centro.</p>

        <p>Vi aspettiamo presto a Quarto per vivere insieme una nuova esperienza firmata Bellella.</p>
      `,
        },
        {
            id: 2,
            title: 'Nuova pizza del mese: La colori d’estate ',
            category: 'Menu',
            date: '5 ottobre 2026',
            teaser:
                'Scopri la nuova pizza del mese: La colori d’estate, realizzata con ingredienti di stagione e un impasto leggero.',
            images: ['assets/img/news/news_2.jpg'],
            contentHtml: `
        <p>Scopri la nuova pizza del mese: La colori d’estate, realizzata con ingredienti di stagione e un impasto leggero.</p>
        <p><strong>Ingredienti:</strong></p>
        <ul>
          <li>Salsiccia artigianale</li>
          <li>Provola di Agerola affumicata in paglia</li>
          <li>Provolone del monaco DOP</li>
          <li>Basilico fresco</li>
          <li>Olio evo bio selezione Guglielmi</li>
        </ul>
        <p>Vieni a provare le nuove pizze accompagnate dai nostri vini selezionati e dalle birre artigianali.</p>
      `,
        },
        {
            id: 3,
            title: 'Nuovi liquori artigianali firmati Pizzeria Bellella',
            category: 'Novità',
            date: '28 settembre 2026',
            teaser:
                'Scopri la nostra selezione di liquori artigianali, pensati per concludere il pasto con un autentico sapore della tradizione italiana.',
            images: [
                'assets/img/news/news_3_1.jpeg',
                'assets/img/news/news_3_2.jpeg',
                'assets/img/news/news_3_3.jpeg',
                'assets/img/news/news_3_4.jpeg',
                'assets/img/news/news_3_5.jpeg',
            ],
            contentHtml: `
        <p>Alla Pizzeria Bellella abbiamo deciso di arricchire la nostra proposta con una selezione di liquori artigianali, pensati per concludere il pasto con un autentico sapore della tradizione italiana.</p>
        <p>La nostra linea comprende cinque gusti unici:</p>
        <ul>
          <li>Liquore al Pistacchio – Cremoso e vellutato, con il gusto intenso del pistacchio. Perfetto da gustare ben freddo come fine pasto.</li>
          <li>Liquore al Caffè – Ricco e aromatico, ideale per gli amanti dell’espresso e dei sapori decisi.</li>
          <li>Limoncello – Preparato secondo la tradizione, con limoni selezionati che regalano un aroma fresco e agrumato.</li>
          <li>Meloncello – Una crema di melone dolce e delicata, dal gusto morbido e avvolgente.</li>
          <li>Liquore alla Sfogliatella – Un gusto originale che richiama il celebre dolce napoletano, con note di ricotta, canditi e cannella, per un’esperienza davvero unica.</li>
        </ul>
        <p>Prenota il tuo tavolo e goditi un’esperienza unica con atmosfere curate e servizio attento.</p>
      `,
        },
        {
            id: 4,
            title: 'Nasce il nostro pomodoro in collaborazione con Carmela',
            category: 'Novità',
            date: '10 settembre 2026',
            teaser:
                'Scopri la nostra nuova collaborazione con Carmela e il pomodoro San Marzano DOP.',
            images: ['assets/img/news/news_4.jpeg'],
            contentHtml: `
      <p>Il nostro progetto nasce nel cuore dell’Agro Sarnese-Nocerino, una terra conosciuta in tutto il mondo per la produzione del Pomodoro San Marzano DOP, apprezzato per la sua polpa carnosa, il sapore equilibrato e la naturale dolcezza.</p>
      <p>Le caratteristiche uniche di questo territorio, tra suoli fertili e tradizione agricola, rendono questo pomodoro un simbolo della gastronomia italiana.</p> 
      <p>Grazie alla collaborazione con Carmela, abbiamo selezionato un pomodoro capace di esaltare ogni pizza Bellella, valorizzando la semplicità degli ingredienti e il gusto autentico della tradizione napoletana.</p>
      `,
        },
    ];

    getAll(): NewsItem[] {
        return [...this.news];
    }

    getById(id: number): NewsItem | undefined {
        return this.news.find((item) => item.id === id);
    }

    getCategories(): string[] {
        const categories = this.news.map((item) => item.category);
        return ['All', ...Array.from(new Set(categories))];
    }
}
