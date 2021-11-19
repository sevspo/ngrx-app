import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { UserActions } from './action-types';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  addUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.createUser),
        switchMap((action) => this.userService.createUser(action.user))
      ),
    { dispatch: false }
  );
}
