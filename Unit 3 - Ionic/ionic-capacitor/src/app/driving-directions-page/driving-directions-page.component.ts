import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';
import { StartNavigation } from '@proteansoftware/capacitor-start-navigation';
import { ArcgisMapComponent } from '../maps/arcgis-map/arcgis-map.component';
import { ArcgisMarkerDirective } from '../maps/arcgis-marker/arcgis-marker.directive';
import { ArcgisSearchDirective } from '../maps/arcgis-search/arcgis-search.directive';
import { SearchResult } from '../maps/interfaces/search-result';

@Component({
  selector: 'app-driving-directions-page',
  standalone: true,
  imports: [CommonModule, IonicModule, ArcgisMapComponent, ArcgisMarkerDirective, ArcgisSearchDirective],
  templateUrl: './driving-directions-page.component.html',
  styleUrls: ['./driving-directions-page.component.scss'],
})
export class DrivingDirectionsPageComponent implements OnInit {
  lat = 0;
  lng = 0;

  constructor() { }

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lng = coordinates.coords.longitude;
  }

  startNavigation() {
    StartNavigation.launchMapsApp({
      latitude: this.lat,
      longitude: this.lng,
      name: 'Directions example',
    });
  }

  searchResult(result: SearchResult) {
    this.lat = result.latitude;
    this.lng = result.longitude;
  }

}
