import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@capacitor/clipboard';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clipboard-page',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './clipboard-page.component.html',
  styleUrls: ['./clipboard-page.component.scss'],
})
export class ClipboardPageComponent {
  text = '';

  constructor(private toastCtrl: ToastController) { }

  async copy() {
    await Clipboard.write({
      string: this.text
    });

    const toast = await this.toastCtrl.create({
      message: 'Text copied',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

  async paste() {
    const result = await Clipboard.read();
    this.text = result.value;
  }
}
