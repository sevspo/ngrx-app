import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.reducer';
import * as fromPost from './post.reducer';

export const selectPostsState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
  selectPostsState,
  fromPost.selectAll
);
