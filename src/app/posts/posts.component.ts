import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { PostActions } from './store/post-action-types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onGetPosts() {
    this.store.dispatch(PostActions.loadAllPosts());
  }
}
