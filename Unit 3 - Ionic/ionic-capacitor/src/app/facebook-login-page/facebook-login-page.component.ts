import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-facebook-login-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './facebook-login-page.component.html',
  styleUrls: ['./facebook-login-page.component.scss'],
})
export class FacebookLoginPageComponent implements OnInit {
  accessToken = '';

  constructor() {}

  async ngOnInit() {
    const resp = await FacebookLogin.getCurrentAccessToken() as FacebookLoginResponse;
    if (resp.accessToken) {
      this.accessToken = resp.accessToken.token;
    }
  }

  async login() {
    const resp = await FacebookLogin.login({ permissions: ['email'] }) as FacebookLoginResponse;
    if (resp.accessToken) {
      this.accessToken = resp.accessToken.token;
    }
  }

  async logout() {
    await FacebookLogin.logout();
    this.accessToken = '';
  }
}
