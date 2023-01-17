import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'chevron-up'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    {
      title: 'Device Info',
      url: '/device',
      icon: 'phone-portrait'
    },
    {
      title: 'Dialogs',
      url: '/dialogs',
      icon: 'alert'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'folder'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Motion',
      url: '/motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Social sharing',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'save'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'pulse'
    },
  ];
  constructor(
    public environmentInjector: EnvironmentInjector,
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    if (this.platform.is('capacitor')) {
      await this.platform.ready();
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#3880ff' });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }
}
