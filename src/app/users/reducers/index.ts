import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { UserActions } from '../action-types';
import { User } from '../user.types';

export const usersFeatureKey = 'users';

export interface UserState {
  users: User[];
}

// export const reducers: ActionReducerMap<UserState> = {};

export const initialUsersState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialUsersState,
  on(UserActions.getUsers, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  }),

  on(UserActions.clearUsers, (state, action) => {
    return {
      ...state,
      users: [],
    };
  })
);

function genericTest<T>(arg: T): { [key: string]: T } {
  return {
    test: arg,
  };
}

const test = genericTest({ test: 'test' });
