import { FeedbackState } from '@/types';
import * as FeedbackActions from './feedback.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: FeedbackState = {
    feedback: [],
    loading: false,
    error: null
};

export const feedbackReducer = createReducer(
    initialState,
    on(FeedbackActions.loadFeedback, (state) => ({...state, loading: true, error: null})),
    on(FeedbackActions.loadFeedbackSuccess, (state, {feedback}) => ({...state, feedback, loading: false})),
    on(FeedbackActions.loadFeedbackFailure, (state, {error}) => ({...state, error, loading: false})),
    )