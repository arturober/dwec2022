import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vibration-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './vibration-page.component.html',
  styleUrls: ['./vibration-page.component.scss'],
})
export class VibrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  vibrate() {
    Haptics.vibrate();
  }

  vibrateHard() {
    Haptics.impact({style: ImpactStyle.Heavy});
  }

  vibrateLong() {
    Haptics.vibrate({duration: 1000});
  }

}
