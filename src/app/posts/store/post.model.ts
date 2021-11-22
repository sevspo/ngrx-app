import { ResponseBase } from 'src/app/core/shared/shared.model';

export interface Post {
  id: string;
  body: string;
  title: string;
  user_id: string;
}

// export interface IPostResponse extends ResponseBase<Post[]> {}

export type PostResponse = ResponseBase<Post[]>;
