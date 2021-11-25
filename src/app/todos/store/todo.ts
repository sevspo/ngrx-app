import { ResponseBase } from 'src/app/core/shared/shared.model';

export interface Todo {
  id?: number;
  due_on: Date;
  status: 'pending' | 'completed';
  title: string;
  user_id: number;
}

export type TodoResponse = ResponseBase<Todo[]>;
