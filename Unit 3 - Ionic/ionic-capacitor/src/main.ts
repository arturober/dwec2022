import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { provideArcgisToken } from './app/maps/arcgis-maps.config';
import { APP_ROUTES } from './app/routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    importProvidersFrom(IonicModule.forRoot()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideArcgisToken('AAPKc2940b004f38491b869000328dd73685GNKiJxJwOBscpCvz9Pxpae-LVDdvsqr_p6VDTqAas1Kj7idPwcMZqSc-fuDAY91R')
  ],
});

