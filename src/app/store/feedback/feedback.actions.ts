import { createAction, props } from "@ngrx/store";
import { Feedback } from "@/types";

export const loadFeedback = createAction('[Feedback] Load Feedback');
export const loadFeedbackSuccess = createAction('[Feedback] Load Feedback Success', props<{ feedback: Feedback[] }>());
export const loadFeedbackFailure = createAction('[Feedback] Load Feedback Failure', props<{ error: string }>());