import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from './post.model';
import * as PostActions from './post.actions';

export const postsFeatureKey = 'posts';

export interface PostState extends EntityState<Post> {
  hasPosts: boolean;
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  sortComparer: (a: Post, b: Post) => {
    return a.id > b.id ? 1 : b.id > a.id ? -1 : 0;
  },
});

export const initialState: PostState = adapter.getInitialState({
  hasPosts: false,
});

export const reducer = createReducer(
  initialState,
  on(PostActions.allPostsLoaded, (state, action) =>
    adapter.setAll(action.posts, { ...state, hasPosts: true })
  ),
  on(PostActions.addPost, (state, action) =>
    adapter.addOne(action.post, state)
  ),
  on(PostActions.upsertPost, (state, action) =>
    adapter.upsertOne(action.post, state)
  ),
  on(PostActions.addPosts, (state, action) =>
    adapter.addMany(action.posts, state)
  ),
  on(PostActions.upsertPosts, (state, action) =>
    adapter.upsertMany(action.posts, state)
  ),
  on(PostActions.updatePost, (state, action) =>
    adapter.updateOne(action.post, state)
  ),
  on(PostActions.updatePosts, (state, action) =>
    adapter.updateMany(action.posts, state)
  ),
  on(PostActions.deletePost, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(PostActions.deletePosts, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(PostActions.loadPosts, (state, action) =>
    adapter.setAll(action.posts, state)
  ),
  on(PostActions.clearPosts, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
