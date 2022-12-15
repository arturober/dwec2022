import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { provideFacebookId } from './app/facebook-login/fb-login.config';
import { provideGoogleId } from './app/google-login/google-login.config';
import { LoadGoogleApiService } from './app/google-login/load-google-api.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideGoogleId('746820501392-nc4pet9ffnm8gq8hg005re9e6ho65nua.apps.googleusercontent.com'),
    provideFacebookId('551918016324547', 'v15.0')
  ]
});
