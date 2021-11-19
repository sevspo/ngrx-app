import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { UserService } from './user.service';
import { User } from './user.types';
import { clearUsers, createUser, getUsers } from './users.actions';
import { selectAllUsers } from './users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  onGetUsers() {
    this.userService.getUsers().subscribe((response) => {
      // console.log(response);
      this.store.dispatch(getUsers({ users: response.data }));
    });
  }

  users$ = this.store.select(selectAllUsers);

  onClearUsers() {
    this.store.dispatch(clearUsers());
  }

  onCreateUser() {
    const user: User = {
      name: 'John Doe',
      email: 'test@test.ch',
      gender: 'male',
      status: 'active',
    };

    this.store.dispatch(createUser({ user }));
  }
}
