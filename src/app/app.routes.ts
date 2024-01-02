import { Routes } from '@angular/router';

const SuggestionsComponent = () => import('./suggestions/suggestions.component').then(m => m.SuggestionsComponent);

export const routes: Routes = [
    { path: '', loadComponent: SuggestionsComponent,  },
];
