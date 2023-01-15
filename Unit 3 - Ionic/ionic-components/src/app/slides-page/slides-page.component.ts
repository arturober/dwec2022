import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-slides-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './slides-page.component.html',
  styleUrls: ['./slides-page.component.scss'],
})
export class SlidesPageComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

  async slideChange(event: Event) {
    const slides = (event.target as HTMLIonSlidesElement);
    console.log(await slides.getActiveIndex());
  }
}
