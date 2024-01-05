import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as FeedbackActions from './feedback.actions';
import { FeedbackService } from '@/app/services/feedback.service';

@Injectable()
export class FeedbackEffects {
  loadFeedback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedbackActions.loadFeedback),
      mergeMap(() =>
        this.feedbackService.loadFeadback().pipe(
          map((feedback) => FeedbackActions.loadFeedbackSuccess({ feedback })),
          catchError((error) => of(FeedbackActions.loadFeedbackFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private feedbackService: FeedbackService) {}
}
