import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { feedbackReducer } from './store/feedback/feedback.reducer';
import { FeedbackEffects } from './store/feedback/feedback.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore({feedback: feedbackReducer}),
    provideEffects([FeedbackEffects]),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: false,
        trace: false,
        traceLimit: 75,
        connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
]
};
