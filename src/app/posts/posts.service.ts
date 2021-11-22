import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../users/user.types';
import { PostResponse } from './store/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostResponse>(`${environment.baseUrl}/posts`);
  }

  createPost(post: any) {
    return this.http.post<any>(`${environment.baseUrl}/posts`, post);
  }
}
