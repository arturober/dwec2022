import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-barcode-scanner-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './barcode-scanner-page.component.html',
  styleUrls: ['./barcode-scanner-page.component.scss'],
})
export class BarcodeScannerPageComponent implements OnInit {
  data = '';

  async ngOnInit()  {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.prepare();
  }

  async scan() {
    document.body.style.opacity = '0'; // make WebView transparent
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    document.body.style.opacity = '1';
    if (result.hasContent) {
      this.data = result.content!; // log the raw scanned content
    }
  }
}
