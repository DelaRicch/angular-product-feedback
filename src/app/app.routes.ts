import { Routes } from '@angular/router';

const SuggestionsComponent = () => import('./suggestions/suggestions.component').then(m => m.SuggestionsComponent);
const AddFeedbackComponent = () => import('./add-feedback/add-feedback.component').then(m => m.AddFeedbackComponent);

export const routes: Routes = [
    { path: '', loadComponent: SuggestionsComponent,},
    { path: 'add-feedback', loadComponent: AddFeedbackComponent,},
];
