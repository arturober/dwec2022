import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CapacitorFlash } from '@capgo/capacitor-flash';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-flashlight-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './flashlight-page.component.html',
  styleUrls: ['./flashlight-page.component.scss'],
})
export class FlashlightPageComponent {
  on = false;

  async toggleFlash() {
    this.on = (await CapacitorFlash.toggle()).value;
  }

  ngOnDestroy() {
    CapacitorFlash.switchOff();
  }
}
