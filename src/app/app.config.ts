import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Token.
import { INDEXEDDB_NAME, INDEXEDDB_STORE, INDEXEDDB_STORE_NAME, INDEXEDDB_VERSION } from './app.indexeddb.config';
import { INDEXEDDB_NAME_TOKEN } from './indexeddb/indexeddb-name.token';
import { INDEXEDDB_STORE_NAME_TOKEN, INDEXEDDB_STORE_TOKEN } from './indexeddb/indexeddb-store.token';
import { INDEXEDDB_VERSION_TOKEN } from './indexeddb/indexeddb-version.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: INDEXEDDB_NAME_TOKEN, useValue: INDEXEDDB_NAME},
    {provide: INDEXEDDB_STORE_TOKEN, useValue: INDEXEDDB_STORE},
    {provide: INDEXEDDB_STORE_NAME_TOKEN, useValue: INDEXEDDB_STORE_NAME},
    {provide: INDEXEDDB_VERSION_TOKEN, useValue: INDEXEDDB_VERSION},
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  ]
};
