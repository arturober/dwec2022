import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviceInfo, BatteryInfo, Device } from '@capacitor/device';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-device-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.scss'],
})
export class DevicePageComponent implements OnInit {
  info!: DeviceInfo;
  battery!: BatteryInfo;

  constructor() { }

  async ngOnInit() {
    this.info = await Device.getInfo();
    this.battery = await Device.getBatteryInfo();
  }
}
