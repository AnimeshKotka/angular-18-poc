import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { AppModule } from './app/app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
