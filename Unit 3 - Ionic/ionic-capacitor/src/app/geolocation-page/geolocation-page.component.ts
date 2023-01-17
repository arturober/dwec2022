import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';
import { ArcgisMapComponent } from '../maps/arcgis-map/arcgis-map.component';
import { ArcgisMarkerDirective } from '../maps/arcgis-marker/arcgis-marker.directive';

@Component({
  selector: 'app-geolocation-page',
  standalone: true,
  imports: [CommonModule, IonicModule, ArcgisMapComponent, ArcgisMarkerDirective],
  templateUrl: './geolocation-page.component.html',
  styleUrls: ['./geolocation-page.component.scss'],
})
export class GeolocationPageComponent implements OnInit {
  lat = 0;
  lng = 0;

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lng = coordinates.coords.longitude;
  }
}
