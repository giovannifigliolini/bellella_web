import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss'],
})
export class FotoComponent {
  titoloHeader = 'Foto';
  paginaHeader = 'Foto';

  galleryImages = [
    { src: 'assets/img/trattoria/locale_1.jpg', alt: 'Angolo della trattoria' },
    { src: 'assets/img/trattoria/locale_2.jpg', alt: 'Trattoria Bellella vista interna' },
    { src: 'assets/img/trattoria/piatto_1.jpg', alt: 'Spaghetto alla Nerano' },
    { src: 'assets/img/trattoria/piatto_2.jpg', alt: 'Pacchero baccalà, olive e capperi' },
    { src: 'assets/img/trattoria/piatto_3.jpg', alt: 'Polpette al ragù' },
    { src: 'assets/img/trattoria/piatto_4.jpg', alt: 'Calamarette fritte' },
    { src: 'assets/img/trattoria/piatto_5.jpg', alt: 'Pastiera' },
    { src: 'assets/img/trattoria/piatto_6.jpg', alt: 'Tiramisù' },
    { src: 'assets/img/pizzeria/locale_1.jpg', alt: 'Angolo della trattoria a lavoro' },
    { src: 'assets/img/pizzeria/locale_2.jpg', alt: 'Angolo della trattoria' },
    { src: 'assets/img/pizzeria/pizza_1.jpg', alt: 'Pizza margherita' },
    { src: 'assets/img/pizzeria/pizza_2.jpg', alt: 'Pizze e birre' },
    { src: 'assets/img/pizzeria/pizza_3.jpg', alt: 'Pizza e pomodoro' },
    { src: 'assets/img/pizzeria/pizza_4.jpg', alt: 'Basilico fresco' },
    { src: 'assets/img/quartieri_1.jpg', alt: 'Quartieri' },
  ];

  selectedIndex: number | null = null;

  @HostListener('document:keydown.escape')
  onEscapeKeydown(): void {
    this.closeGallery();
  }

  get selectedImage() {
    return this.selectedIndex !== null ? this.galleryImages[this.selectedIndex] : null;
  }

  openGallery(index: number): void {
    this.selectedIndex = index;
  }

  closeGallery(): void {
    this.selectedIndex = null;
  }

  nextImage(): void {
    if (this.selectedIndex === null) {
      return;
    }

    this.selectedIndex = (this.selectedIndex + 1) % this.galleryImages.length;
  }

  previousImage(): void {
    if (this.selectedIndex === null) {
      return;
    }

    this.selectedIndex =
      (this.selectedIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }
}
