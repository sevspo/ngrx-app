import { UserState } from './reducers';

// user selector

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

const getUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  getUserState,
  (users) => users.users
);
