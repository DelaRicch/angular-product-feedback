import { FeedbackState } from "@/types";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectFeedbackState = createFeatureSelector<FeedbackState>('feedback');

export const selectFeedback = createSelector(selectFeedbackState, (state) => state.feedback);
export const selectFeedbackLoading = createSelector(selectFeedbackState, (state) => state.loading);
export const selectFeedbackError = createSelector(selectFeedbackState, (state) => state.error);