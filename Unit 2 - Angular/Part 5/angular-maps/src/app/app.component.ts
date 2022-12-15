import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'angular-maps';
  address = '';
  latitude = 0.37;
  longitude = -0.5;

  searchResult(result: SearchResult) {
    this.address = result.address;
    this.latitude = result.latitude;
    this.longitude = result.longitude;
  }
}
