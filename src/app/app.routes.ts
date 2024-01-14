import { Routes } from '@angular/router';

const SuggestionsComponent = () =>
  import('./components/suggestions/suggestions.component').then(
    (m) => m.SuggestionsComponent,
  );
const AddFeedbackComponent = () =>
  import('./components/add-feedback/add-feedback.component').then(
    (m) => m.AddFeedbackComponent,
  );
  const FeedbackDetailsComponent = () =>
  import('./components/feedback-details/feedback-details.component').then(
    (m) => m.FeedbackDetailsComponent,
  );

  const RoadmapDetailsComponent = () =>
  import('./components/roadmap-details/roadmap-details.component').then(
    (m) => m.RoadmapDetailsComponent,
  );


export const routes: Routes = [
  { path: '', loadComponent: SuggestionsComponent },
  {path: 'roadmap-details', loadComponent: RoadmapDetailsComponent},
  { path: 'add-feedback', loadComponent: AddFeedbackComponent },
  { path: 'feedback-details/:id', loadComponent: FeedbackDetailsComponent },
  {path: 'edit-feedback/:id', loadComponent: AddFeedbackComponent},
];
