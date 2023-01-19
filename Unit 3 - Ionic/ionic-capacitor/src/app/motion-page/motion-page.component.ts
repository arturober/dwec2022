import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-motion-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './motion-page.component.html',
  styleUrls: ['./motion-page.component.scss'],
})
export class MotionPageComponent implements OnDestroy {
  accelListener!: PluginListenerHandle;
  orientListener!: PluginListenerHandle;
  acceleration = { x: 0, y: 0, z: 0 };
  orientation = { alpha: 0, beta: 0, gamma: 0 };
  started = false;

  constructor(private ngZone: NgZone) {}

  async startMotion() {
    this.accelListener = Motion.addListener('accel', event => {
      this.ngZone.run(() => (this.acceleration = event.acceleration));
    });
    this.orientListener = Motion.addListener('orientation', event => {
      this.ngZone.run(() => {
        this.orientation = event;
      });
    });

    this.started = true;
  }

  ngOnDestroy() {
    Motion.removeAllListeners();
  }
}
