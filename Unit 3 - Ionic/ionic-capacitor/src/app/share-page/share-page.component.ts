import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Share } from '@capacitor/share';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-share-page',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss'],
})
export class SharePageComponent {
  message = '';

  constructor() { }

  share() {
    Share.share({
      dialogTitle: 'Share with others!',
      text: this.message,
    });
  }
}
