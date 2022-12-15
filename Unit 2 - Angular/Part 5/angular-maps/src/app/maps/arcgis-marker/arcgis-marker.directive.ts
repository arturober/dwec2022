import {
  Directive,
  Input,
  OnChanges, SimpleChanges
} from '@angular/core';
import Graphic from '@arcgis/core/Graphic';
import { ArcgisMapComponent } from '../arcgis-map/arcgis-map.component';
import { LoadArcgisMapsService } from '../load-arcgis-maps.service';

@Directive({
  selector: 'arcgis-marker',
  standalone: true,
})
export class ArcgisMarkerDirective implements OnChanges {
  marker!: Graphic;
  @Input() coords!: [number, number];
  @Input() color: string = 'red';

  constructor(
    private readonly map: ArcgisMapComponent,
    private readonly loadMaps: LoadArcgisMapsService
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['coords'].isFirstChange()) {
      this.map.mapViewLoad$.subscribe((mapView) => {
        this.loadMaps
          .getMarker(
            mapView,
            {
              latitude: this.coords[1],
              longitude: this.coords[0],
            },
            this.color
          )
          .then((marker) => (this.marker = marker));
      });
    } else if (changes['coords'].currentValue !== changes['coords'].previousValue) {
      const { Point } = await import('@arcgis/core/geometry');
      this.marker.geometry = new Point({
        latitude: this.coords[1],
        longitude: this.coords[0]
      });
    }

    if (changes['color']?.currentValue !== changes['color']?.previousValue) {
      this.marker?.symbol?.color.setColor(this.color);
    }
  }
}
