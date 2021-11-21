import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>(`${environment.baseUrl}/posts`);
  }

  createPost(post: any) {
    return this.http.post<any>(`${environment.baseUrl}/posts`, post);
  }
}
