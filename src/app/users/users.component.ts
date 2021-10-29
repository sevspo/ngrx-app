import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { UserService } from './user.service';
import { getUsers } from './users.actions';

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
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.store.dispatch(getUsers());
    });
  }
}
