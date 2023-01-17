import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camera-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './camera-page.component.html',
  styleUrls: ['./camera-page.component.scss'],
})
export class CameraPageComponent implements OnInit {
  image!: string;

  constructor() { }

  ngOnInit() {}

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.image = photo.dataUrl!;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    });

    this.image = photo.dataUrl!;
  }
}
