// src/app/maps-loader.service.ts
import { isPlatformBrowser } from '@angular/common'; // <-- IMPORT isPlatformBrowser
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'; // <-- IMPORT Inject, PLATFORM_ID
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MapsLoaderService {
  private apiLoaded: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public apiLoaded$: Observable<boolean> = this.apiLoaded.asObservable();

  // 1. INJECT the PLATFORM_ID token
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // 2. WRAP all browser-specific code in this check
    if (isPlatformBrowser(this.platformId)) {
      // This code will only run in the browser

      // Check if the script is already on the page
      if ((window as any).google?.maps) {
        this.apiLoaded.next(true);
        this.apiLoaded.complete();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.apiLoaded.next(true);
        this.apiLoaded.complete();
      };

      script.onerror = () => {
        this.apiLoaded.error('Could not load Google Maps script.');
      };

      document.head.appendChild(script);
    } else {
      // This code will run on the server. Do nothing related to the DOM.
      // We can optionally signal that the API is not available on the server.
      this.apiLoaded.next(false);
      this.apiLoaded.complete();
    }
  }
}
