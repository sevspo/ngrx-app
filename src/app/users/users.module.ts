import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './reducers';
import { TuiButtonModule } from '@taiga-ui/core';
import { userReducer } from './reducers';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    TuiButtonModule,
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, userReducer),
  ],
})
export class UsersModule {}
