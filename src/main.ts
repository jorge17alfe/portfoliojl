import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),// 🔥 habilita animaciones en cliente
    provideRouter(routes) 
  ]
}).catch((err) => console.error(err));



