import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArcgisMapComponent } from './maps/arcgis-map/arcgis-map.component';
import { ArcgisMarkerDirective } from './maps/arcgis-marker/arcgis-marker.directive';
import { ArcgisSearchDirective } from './maps/arcgis-search/arcgis-search.directive';
import { SearchResult } from './maps/interfaces/search-result';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ArcgisMapComponent,
    ArcgisMarkerDirective,
    ArcgisSearchDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-maps';
  address = '';
  latitude = 37;
  longitude = -0.5;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  searchResult(result: SearchResult) {
    this.address = result.address;
    this.latitude = result.latitude;
    this.longitude = result.longitude;
  }
}
