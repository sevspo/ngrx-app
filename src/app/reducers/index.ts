import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { UserState } from '../users/reducers';
import * as fromUsers from '../users/reducers';
import { routerReducer } from '@ngrx/router-store';

// why not do this?
export interface AppState {
  // users: UserState;
}

// what is the ActionReducerMap?
export const reducers: ActionReducerMap<AppState> = {
  // users: fromUsers.userReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
