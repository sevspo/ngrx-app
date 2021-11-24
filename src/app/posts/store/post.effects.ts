import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { PostsService } from '../posts.service';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadAllPosts),
      concatMap(() => this.postsService.getPosts()),
      map((posts) => PostActions.allPostsLoaded({ posts: posts.data }))
    )
  );
}
