import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FbLoginDirective } from './facebook-login/fb-login.directive';
import { GoogleLoginDirective } from './google-login/google-login.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    GoogleLoginDirective,
    FbLoginDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-login';
  googleIcon = faGoogle;
  fbIcon = faFacebook;
  userInfo = {
    token: '',
    name: '',
    email: '',
    image: '',
  };

  fbUserInfo = {
    token: '',
    userId: '',
  };

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    this.userInfo.token = user.getAuthResponse().id_token;
    this.userInfo.name = user.getBasicProfile().getName();
    this.userInfo.email = user.getBasicProfile().getEmail();
    this.userInfo.image = user.getBasicProfile().getImageUrl();
    console.log(this.userInfo);
  }

  loggedFacebook(resp: fb.StatusResponse) {
    this.fbUserInfo.token = resp.authResponse.accessToken;
    this.fbUserInfo.userId = resp.authResponse.userID;
  }
}
