// src/app/demos/administration-portal/device-map/device-map.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Observable } from 'rxjs'; // <-- Import Observable
import { MapsLoaderService } from '../../../maps-loader.service';

@Component({
  selector: 'app-device-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './device-map.component.html',
  styleUrls: ['./device-map.component.css'],
})
export class DeviceMapComponent {
  // This observable will tell our template when the API is ready
  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = { lat: 41.8781, lng: -87.961 };
  zoom = 10;
  devices: any[] = [];
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  constructor(private mapsLoader: MapsLoaderService) {
    // Get the observable from our service
    this.apiLoaded = this.mapsLoader.apiLoaded$;

    // The device generation logic can stay here or be moved to ngOnInit
    const statuses = ['Online', 'Offline', 'Needs Attention'];
    for (let i = 0; i < 40; i++) {
      const latOffset = (Math.random() - 0.5) * 0.5;
      const lngOffset = (Math.random() - 0.5) * 0.5;
      const device = {
        position: {
          lat: this.center.lat + latOffset,
          lng: this.center.lng + lngOffset,
        },
        tag: `CB-${String(10000 + i).padStart(5, '0')}`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
      };
      this.devices.push(device);
    }
  }
}
