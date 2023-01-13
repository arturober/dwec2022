import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './infinite-scroll-page.component.html',
  styleUrls: ['./infinite-scroll-page.component.scss'],
})
export class InfiniteScrollPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
