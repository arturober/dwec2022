import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User, GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-google-login-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './google-login-page.component.html',
  styleUrls: ['./google-login-page.component.scss'],
})
export class GoogleLoginPageComponent {
  user!: User;

  async login() {
    try {
      this.user = await GoogleAuth.signIn();
    } catch (err) {
      console.error(err);
    }
  }
}
