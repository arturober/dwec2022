import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-storage-page',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.scss'],
})
export class StoragePageComponent implements OnInit {
  name = '';

  constructor(private toastCtrl: ToastController) {}

  async ngOnInit() {
    const { value } = await Preferences.get({ key: 'name' });
    if (value) {
      this.name = value;
    }
  }

  async save() {
    await Preferences.set({ key: 'name', value: this.name });

    const toast = await this.toastCtrl.create({
      message: 'Name saved!',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }
}
