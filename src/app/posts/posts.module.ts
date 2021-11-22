import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './store/post.reducer';
import { TuiButtonModule } from '@taiga-ui/core';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    TuiButtonModule,
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.reducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostsModule {}
