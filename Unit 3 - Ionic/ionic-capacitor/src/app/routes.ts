import { Routes } from '@angular/router';
export const APP_ROUTES: Routes = [
  {
    path: 'vibration',
    loadComponent: () =>
      import('./vibration-page/vibration-page.component').then(
        (m) => m.VibrationPageComponent
      ),
  },
  {
    path: 'camera',
    loadComponent: () =>
      import('./camera-page/camera-page.component').then(
        (m) => m.CameraPageComponent
      ),
  },
  {
    path: 'clipboard',
    loadComponent: () =>
      import('./clipboard-page/clipboard-page.component').then(
        (m) => m.ClipboardPageComponent
      ),
  },
  {
    path: 'device',
    loadComponent: () =>
      import('./device-page/device-page.component').then(
        (m) => m.DevicePageComponent
      ),
  },
  {
    path: 'filesystem',
    loadComponent: () =>
      import('./filesystem-page/filesystem-page.component').then(
        (m) => m.FilesystemPageComponent
      ),
  },
  {
    path: 'geolocation',
    loadComponent: () =>
      import('./geolocation-page/geolocation-page.component').then(
        (m) => m.GeolocationPageComponent
      ),
  },
  {
    path: 'local-notifications',
    loadComponent: () =>
      import('./local-notifications-page/local-notifications-page.component').then(
        (m) => m.LocalNotificationsPageComponent
      ),
  },
  {
    path: 'dialogs',
    loadComponent: () =>
      import('./dialogs-page/dialogs-page.component').then(
        (m) => m.DialogsPageComponent
      ),
  },
  {
    path: 'action-sheet',
    loadComponent: () =>
      import('./action-sheet-page/action-sheet-page.component').then(
        (m) => m.ActionSheetPageComponent
      ),
  },
  {
    path: 'motion',
    loadComponent: () =>
      import('./motion-page/motion-page.component').then(
        (m) => m.MotionPageComponent
      ),
  },
  {
    path: 'network',
    loadComponent: () =>
      import('./network-page/network-page.component').then(
        (m) => m.NetworkPageComponent
      ),
  },
  {
    path: 'share',
    loadComponent: () =>
      import('./share-page/share-page.component').then(
        (m) => m.SharePageComponent
      ),
  },
  {
    path: 'storage',
    loadComponent: () =>
      import('./storage-page/storage-page.component').then(
        (m) => m.StoragePageComponent
      ),
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('./toast-page/toast-page.component').then(
        (m) => m.ToastPageComponent
      ),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./app-page/app-page.component').then(
        (m) => m.AppPageComponent
      ),
  },
  {
    path: 'driving-directions',
    loadComponent: () =>
      import('./driving-directions-page/driving-directions-page.component').then(
        (m) => m.DrivingDirectionsPageComponent
      ),
  },
  {
    path: 'google-login',
    loadComponent: () =>
      import('./google-login-page/google-login-page.component').then(
        (m) => m.GoogleLoginPageComponent
      ),
  },
  {
    path: 'facebook-login',
    loadComponent: () =>
      import('./facebook-login-page/facebook-login-page.component').then(
        (m) => m.FacebookLoginPageComponent
      ),
  },
  {
    path: 'barcode-scanner',
    loadComponent: () =>
      import('./barcode-scanner-page/barcode-scanner-page.component').then(
        (m) => m.BarcodeScannerPageComponent
      ),
  },
  {
    path: 'sqlite',
    loadComponent: () =>
      import('./sqlite-page/sqlite-page.component').then(
        (m) => m.SqlitePageComponent
      ),
  },
  {
    path: 'flashlight',
    loadComponent: () =>
      import('./flashlight-page/flashlight-page.component').then(
        (m) => m.FlashlightPageComponent
      ),
  },
  {
    path: '',
    redirectTo: '/vibration',
    pathMatch: 'full'
  }
];
