import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { PluginListenerHandle } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-app-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss'],
})
export class AppPageComponent implements OnInit {
  backHandler!: PluginListenerHandle;

  constructor() {}

  async ngOnInit() {
    this.backHandler = App.addListener('backButton', async (event) => {
      const resp = await Dialog.confirm({
        title: 'Close app',
        message: 'Do you really want to exit?',
        okButtonTitle: 'Yes, please',
        cancelButtonTitle: 'Never'
      });

      if (resp.value) {
        App.exitApp();
      }
    });
  }

  ngOnDestroy() {
    this.backHandler.remove();
  }
}
