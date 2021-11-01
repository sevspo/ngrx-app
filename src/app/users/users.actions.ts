import { createAction, props } from '@ngrx/store';
import { User } from './user.types';

export const getUsers = createAction(
  '[Users Component] Get Users',
  props<{ users: User[] }>()
);

// clear all users action
export const clearUsers = createAction('[Users Component] Clear Users');
