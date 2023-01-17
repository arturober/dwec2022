import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-network-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss'],
})
export class NetworkPageComponent implements OnDestroy {
  type = 'none';
  connected = false;
  connHandler!: PluginListenerHandle;

  constructor(private zone: NgZone) {}

  async ngOnInit() {
    this.setConnection(await Network.getStatus());

    this.connHandler = Network.addListener('networkStatusChange', (status) =>
      this.setConnection(status)
    );
  }

  ngOnDestroy() {
    Network.removeAllListeners();
  }

  setConnection(status: ConnectionStatus) {
    this.zone.run(() => {
      this.connected = status.connected;
      this.type = status.connectionType;
    });
  }
}
