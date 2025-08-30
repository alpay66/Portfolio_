import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',            // scrollt automatisch zu #fragment
        scrollPositionRestoration: 'enabled',  // "Back" stellt Scrollposition wieder her             // optional: Platz für fixed Header
      }),
      // Optional: falls du mehrfach zum gleichen Fragment navigierst oder
      // Fragment-Änderungen auf derselben URL erzwingen willst
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    )
  ]
};
