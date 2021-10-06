import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const firebaseConfig = {
    apiKey: "AIzaSyCB4iAOMQ7QGsK4kb_NrSwvK_B75IkUbxA",
    authDomain: "nimble-34cd9.firebaseapp.com",
    projectId: "nimble-34cd9",
    storageBucket: "nimble-34cd9.appspot.com",
    messagingSenderId: "320043011191",
    appId: "1:320043011191:web:d855310a2907f7e1228a72",
    measurementId: "G-7Q292LGBHX"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);