import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-toast-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './toast-page.component.html',
  styleUrls: ['./toast-page.component.scss'],
})
export class ToastPageComponent {

  async showToast() {
    await Toast.show({
      text: 'I\'m a toast notification',
      duration: 'short'
    });
  }
}
