import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { AppState } from '../reducers';
import * as PostActions from './store/post.actions';
import { Post } from './store/post.model';
import { arePostsLoaded, selectAllPosts } from './store/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  posts$: Observable<Post[]> = this.store.select(selectAllPosts);

  hasPosts$: Observable<boolean> = this.store
    .select(arePostsLoaded)
    .pipe(startWith(false));

  onGetPosts() {
    this.store.dispatch(PostActions.loadAllPosts());
  }
}
