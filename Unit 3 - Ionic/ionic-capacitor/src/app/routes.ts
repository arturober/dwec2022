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
    path: '',
    redirectTo: '/vibration',
    pathMatch: 'full'
  }
];
