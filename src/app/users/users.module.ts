import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './reducers';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducers),
  ],
})
export class UsersModule {}
