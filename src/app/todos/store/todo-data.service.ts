import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Todo, TodoResponse } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoDataServcie extends DefaultDataService<Todo> {
  constructor(protected http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Todo', http, httpUrlGenerator);
  }

  getAll(): Observable<Todo[]> {
    return this.http
      .get<TodoResponse>(`${environment.baseUrl}/todos`)
      .pipe(map((res) => res.data));
  }
}
